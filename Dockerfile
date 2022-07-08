FROM node:17-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3005

CMD [ "node", "index.js" ]