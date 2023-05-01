# node-react-chat

[![ci](https://github.com/JawdenWebb/node-react-chat/actions/workflows/main.yml/badge.svg)](https://github.com/JawdenWebb/node-react-chat/actions/workflows/main.yml)
[![DeepSource](https://app.deepsource.com/gh/JawdenWebb/node-react-chat.svg/?label=active+issues&token=yHIPgzUsKNXpB6ukaVavJ3V2)](https://app.deepsource.com/gh/JawdenWebb/node-react-chat/?ref=repository-badge)

Realtime Chat app using chatengine

## Build backend

To build backend container run the following

```shell

cd backend

docker build . -t <image>:<tag>

docker run -d -p <host_port> -it <image>:<tag>

```

## Build frontend

To build frontend container run the following

```shell

cd frontend

docker build . --build-arg url=<url_of_backend> -t <image>:<tag>

docker run -d -p <host_port> -it <image>:<tag>

```
