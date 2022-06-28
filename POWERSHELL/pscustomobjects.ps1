# PSCustomObjects and populating arrays

$data = gci
Measure-Command {
    $a = foreach ($item in $data) {
        [PSCustomObject]@{
            item1 = $item.lastwritetime
            item2 = $item.name
        }
    }
}
## TotalMilliseconds : 132.72

Measure-Command{
$a = @()
foreach ($item in $data) {
    $a +=[PSCustomObject]@{
        item1 = $item.lastwritetime
        item2 = $item.name
    }
}
}
## TotalMilliseconds : 733.7186
