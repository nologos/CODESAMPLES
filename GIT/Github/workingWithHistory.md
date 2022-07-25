# how to search git history

git log -p | grep <pattern>

git rev-list --all|xargs git grep <pattern>