# xargs takes the output from prievious command split by a space and passes to the following command for each loop
echo 1 2 3 |xargs touch


# awk alows formating text output 

ls -al| awk 'NR!=1{print $1 "\t" $9}'


## NR!=1 -- number records not equal one -- skips first record 
## print first column 
## "\t" add a tab
## print 9th column


# xargs and awk togeather

docker ps -a| awk 'NR!=1{print $1}'|xargs docker rm

## gets docker container ID's and xargs passes to docker rm comand, removing the containers