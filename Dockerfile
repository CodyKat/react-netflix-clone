FROM node:latest

WORKDIR /usr/app

COPY . .

RUN npm install

CMD ["tail", "-f"]
