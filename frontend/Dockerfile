FROM node:19.3.0 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . . 
ARG url
ENV VITE_back_url=$url
EXPOSE 8000
ENTRYPOINT [ "npm", "run", "dev", "--host"]
