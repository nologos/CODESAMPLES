docker run -dit --name web1 -p 80:80 -v "$PWD":/usr/local/apache2/htdocs/ -v "$PWD"/apache2.conf:/etc/apache2/ httpd:2.4

docker exec -it 8b /bin/sh