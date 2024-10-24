# untested copilot script
# TODO: pipe not accepted, confirm if disabled mfas error action is stop
# Check if MSOnline module is installed and connect to the service
if (-not (Get-Module -ListAvailable -Name MSOnline)) {
  Install-Module MSOnline -Repository PSGallery -AllowClobber -Force
}
Connect-MsolService

# Get the MFA status for a list of users
function Get-MFAStatus {
  param (
    [string[]]$UserPrincipalName
  )
  foreach ($user in $UserPrincipalName) {
    try {
      $MsolUser = Get-MsolUser -UserPrincipalName $user -ErrorAction Stop
      $MFAMethod = $MsolUser.StrongAuthenticationMethods | Where-Object { $_.IsDefault -eq $true } | Select-Object -ExpandProperty MethodType
      $Method = ""
      Switch ($MFAMethod) {
        "OneWaySMS" { $Method = "SMS token" }
        "TwoWayVoiceMobile" { $Method = "Phone call verification" }
        "PhoneAppOTP" { $Method = "Hardware token or authenticator app" }
        "PhoneAppNotification" { $Method = "Authenticator app" }
      }
      [PSCustomObject]@{
        DisplayName       = $MsolUser.DisplayName
        UserPrincipalName = $MsolUser.UserPrincipalName
        MFAEnabled        = $true
        MFAType           = $Method
      }
    }
    catch {
      [PSCustomObject]@{
        DisplayName       = " - Not found"
        UserPrincipalName = $user
        MFAEnabled        = $false
      }
    }
  }
}

# Get all Azure AD/O365 users
function Get-AllUsers {
  $MsolUsers = Get-MsolUser -All
  $MsolUsers | Select-Object -ExpandProperty UserPrincipalName
}

# Example usage
Get-AllUsers | Get-MFAStatus
