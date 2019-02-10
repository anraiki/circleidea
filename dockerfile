FROM node:7.7.2-alpine
RUN apk add --no-cache bash coreutils grep sed nano
RUN npm install nodemon -g
WORKDIR /usr/App
COPY . .
EXPOSE 3000
EXPOSE 9229