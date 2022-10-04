#!/usr/bin/bash

#function to start screens 
#start_screen <screen_name> <project NPM command>
function start_screen {
    screen -S $1 -dm bash -c "cd /mnt/d/GIT/CODESAMPLES/WEB/TASK2-1/app;npm run $2"
}


# check if website is up
if curl -s --head  --request GET http://localhost:3000 | grep "200 OK" > /dev/null; then
    echo "frontend is up"
else
    echo "frontend is starting"
    start_screen frontend start
    
fi
if curl -s --head  --request GET http://localhost:5000 | grep "200 OK" > /dev/null; then
    echo "backend is up"
else
    echo "backend is starting"
    start_screen backend backend
fi

# screen stats 
#screen -S backend -dm bash -c "cd /mnt/d/GIT/CODESAMPLES/WEB/TASK2-1/app;npm run backend"
#screen -S frontend -dm bash -c "cd /mnt/d/GIT/CODESAMPLES/WEB/TASK2-1/app;npm run start"



