# node-react-chat

Realtime Chat app using chatengine

# Build backend

To build backend container run the following

<code>

cd backend

docker build . -t \<image>:\<tag>

docker run -d -p \<host_port> -it \<image>:\<tag>

</code>

# Build frontend

To build frontend container run the following

<code>

cd frontend

docker build . --build-arg url=\<url_of_backend> -t \<image>:\<tag>

docker run -d -p \<host_port> -it \<image>:\<tag>

</code>
