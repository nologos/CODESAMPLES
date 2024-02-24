# to check the resource groups in your selected subscription
az group list --query "[][name]" -o tsv

# to delete a resource group without prompt, x is the name of the resource group


```powershell
az group delete --name x -y


$a = (az group list --query "[][name]" -o tsv).split("\n") 


$a|? {$_ -notlike "*cloud-shell-*"}| ? {$_ -notlike "*DefaultResourceGroup*"} | % {az group delete --name $_ -y}
```

