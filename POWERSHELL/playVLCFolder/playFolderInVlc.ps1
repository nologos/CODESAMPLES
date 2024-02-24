<#
.SYNOPSIS
plays a random folder in vlc
.DESCRIPTION
This script gets a random folder from the base folder and plays it in vlc
It also updates the metadata in the __meta file
.PARAMETER folder
parameters are set in the .env file in the same directory as the script
.EXAMPLE
./playFolderInVlc.ps1
.EXAMPLE
cat .env
baseFolder=D:\MUSIC\MUSIC
vlcpath=C:\Program Files\VideoLAN\VLC\vlc.exe
#>




# $envFileContent = Get-Content -Path "$PSScriptRoot\.env"
# $envFileContent = Get-Content (gci|? name -eq .env).fullname
# $envFileContent) {
# $env:basefolder
# $env:basefolder
# $env:vlcpath $foldertoplay
# $env:basefolder|get-random
# $env:basefolder
# $env:vlcpath
# $env:basefolder
# $env:basefolder|? {$_.lastwritetime -gt (get-date).AddDays(-30)}}
# $env:basefolder|? {$_.lastwritetime -gt (get-date).AddDays(-90)}}
# $env:basefolder|? {$_.lastwritetime -gt (get-date).AddDays(-180)}}
# $env:basefolder|? {$_.lastwritetime -gt (get-date).AddDays(-180)}}
# $env:basefolder

if ($null -ne $MyInvocation.MyCommand.Path) {
    $envFileContent = Get-Content -Path "$PSScriptRoot\.env"
} else {
    # still requries to be in the correct directory
    $envFileContent = Get-Content (gci|? name -eq .env).fullname
}

foreach ($line in $envFileContent) {
    $name, $value = $line -split "=", 2
    Set-Item -Path "env:\$name" -Value $value
}

param([Parameter(Mandatory = $true)]$folder=$env:basefolder,[Parameter(Mandatory = $true)]$vlcpath=$env:vlcpath)

function Update-Frequency {
    <#
    .SYNOPSIS
        Updates the frequency field in the __meta file
    .PARAMETER metaitem
        The metadata object to update
    .PARAMETER NewFrequency
        The new frequency to set
        DEFAULT: 100
        10-1000 
    .EXAMPLE
        Update-Frequency $metadata[1] 100        
    #>
    param(
        [Parameter(Mandatory = $true,ValueFromPipeline=$true)]
        [PSCustomObject] $metaitem,
        [Parameter(Mandatory = $true)]
        [string] $NewFrequency
    )
process{
    $metaContent = Get-Content -Path $metaitem.metapath
    write-host $metaitem.fullname
    $updatedMetaContent = $metaContent | ForEach-Object {
        if ($_ -match "^Frequency=") {
            "Frequency=$NewFrequency"
        }
        else {
            $_
        }
    }
    $updatedMetaContent | Out-File -FilePath $metaitem.metapath -Force}
}



function rename-bracketfolders {
    <#
    .SYNOPSIS
        Renames folders with brackets in their names
    .DESCRIPTION
        "[]" are used to define ranges in powershell and causes issues inside filenames, 
        I do not want to deal with this and i care little to preserve the original names
        for simplicity brackets just get removed first thing
    .PARAMETER allfolders
        GCI output of the base folder
    #>
    param([Parameter(Mandatory = $true)]$allfolders)

    foreach ($folder in $allfolders) {
        if ($folder.fullname -like '*`[*') {
            $newName = $folder.fullname.Replace('[', '').Replace(']', '')
            Rename-Item -LiteralPath $folder.fullname -NewName $newName
            Write-Host "$folder renamed"
        }
    }
    $allfolders = Get-ChildItem $env:basefolder
}

function get-MusicFolderMetadata {
    <#
    .SYNOPSIS
    gets the contents of the __meta file in the folder
    .DESCRIPTION
    this function gets the contents of the __meta file in the folder
    if it doesn't exist, it creates it
    .PARAMETER folder
    the folder to get the metadata from
    #>
    param([Parameter(Mandatory = $true)]$folder)

    # write-host $folder.FullName

    $metaFilePath = Join-Path $folder.FullName.Replace('[', '`[') "__meta"
    try {
        $content = Get-Content $metaFilePath -ErrorAction Stop
        # if contents are empty throw an error
        if ($null -eq $content) { throw "File is empty" }
    }
    catch {
        # If the file doesn't exist, create it
        New-Item -Path $metaFilePath -ItemType File -Force
        Set-Content -Path $metaFilePath -Value "Frequency=100 `nYearAdded=$($(get-date).Year)`nNotes=`nYear=`nGenre=`nLanguage="
        $content = Get-Content $folder
    }

    # Create a custom object with the folder name
    $meta = [PSCustomObject]@{
        fullname = $folder.FullName
        metapath = $metaFilePath
    }

    # Add the other properties from the file
    foreach ($line in $content) {
        $key, $value = $line -split '=', 2
        $key = $key.Trim() 
        $meta | Add-Member -NotePropertyName $key -NotePropertyValue $value
    }

    return $meta
}



function get-AlgoRandomFolder {
    <#
    .SYNOPSIS
    gets a random folder from the list
    .DESCRIPTION
    gets a random folder based on the metadata preferences
    .PARAMETER metadata
    metadata file info
    #>
    
    param([Parameter(Mandatory = $true)]$metadata)

    # agemultiplier gets reduced by 10% for each year the folder is old

    foreach ($i in 0..($metadata.Count - 1)) {
        $agemultiplier = (1 - ($(get-date).Year - $metadata[$i].YearAdded) * 0.2)
        [int]$metadata[$i].frequency = [int]$metadata[$i].frequency * $agemultiplier / 10
    }

    $items = @()
    foreach ($meta in $metadata) {
        write-host frequency: $meta.frequency $meta.fullname 
        1..$meta.frequency | % { $items += $meta.fullname }
    }

    
    return $items | get-random
}




#-------------------------------


# main get data
$allfolders = Get-ChildItem $env:basefolder
rename-bracketfolders $allfolders
$metadata = $allfolders | ForEach-Object {
    get-MusicFolderMetadata $_
}

# Call the function to update the frequency field
if ($null -ne $MyInvocation.MyCommand.Path) {
    # this only executes if the script is being ran as a ps1 file
    $foldertoplay = get-AlgoRandomFolder $metadata
    & $env:vlcpath $foldertoplay
} else {
    # Write-Host "This script is running interactively."
    $metadata|? fullname -like "*VA-*"| Update-Frequency -NewFrequency 40
    # Put the interactive part of your script here
}




<#
old attempt

# function get-MusicFolderMetadataold($folder){
#     # gets contents of __meta file in folder
#     # if it doesn't exist, creates it
#     if (test-path $($folder.FullName + "\__meta")) {
#         $content = Get-Content $($folder.FullName + "\__meta")
#         Write-Host $content
#         write-host $folder.FullName
#         $meta = New-Object PSObject
#         Add-Member -InputObject $meta -NotePropertyName fullname -NotePropertyValue $folder.FullName
#         Add-Member -InputObject $meta -NotePropertyName metapath -NotePropertyValue $($folder.FullName + "\__meta")
#         foreach ($line in $content) {
#             $key, $value = $line -split '=', 2
#             Add-Member -InputObject $meta -NotePropertyName $key -NotePropertyValue $value
#         }
#         $meta
#     }
#     else{
#         New-Item -Path $($folder.FullName + "\__meta") -ItemType File -Force
#         Set-Content -Path $($folder.FullName + "\__meta") -Value "Frequency=100 `nYearAdded=$($(get-date).AddYears(-1).Year)`nNotes=''`nYear=''`nGenre=''`nLanguage='' "
#         get-MusicFolderMetadata $folder
#     }
# }


# $foldertoplay = Get-ChildItem $env:basefolder|get-random
# $env:basefolder
# $env:vlcpath


# $oddslist = Get-ChildItem $env:basefolder
# $oddslist.Count
# 1..2|% {$oddslist += Get-ChildItem $env:basefolder|? {$_.lastwritetime -gt (get-date).AddDays(-30)}}
# 1..2|% {$oddslist += Get-ChildItem $env:basefolder|? {$_.lastwritetime -gt (get-date).AddDays(-90)}}
# 1..2|% {$oddslist += Get-ChildItem $env:basefolder|? {$_.lastwritetime -gt (get-date).AddDays(-180)}}
# 1..1|% {$oddslist += Get-ChildItem $env:basefolder|? {$_.lastwritetime -gt (get-date).AddDays(-180)}}
# $foldertoplay = $oddslist|get-random


# $oddslist = Get-ChildItem $env:basefolder



#>