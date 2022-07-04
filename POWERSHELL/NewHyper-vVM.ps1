$VMNAME = "2022ubuntu01"
$DVD = "G:\share\ubuntu-22.04-live-server-amd64.iso"
$vmparam = @{
    Name = $VMNAME
    NewVHDPath = "D:\hyper-v\$VMNAME\Virtual Hard Disks\$VMNAME.vhdx"
    NewVHDSizeBytes = 45GB
    Generation = 2
    MemoryStartupBytes = 2GB
    Path = "D:\hyper-v\$VMNAME"
    SwitchName = "ext"
    ErrorAction="Stop"
}
$setParam = @{
    AutomaticCheckpointsEnabled = $false
    ProcessorCount=2
    DynamicMemory=$True
    MemoryMaximumBytes=4GB
    ErrorAction="Stop"
    }
new-vm @vmparam| Set-VM @setparam| Add-VMDvdDrive $DVD |start-vm



