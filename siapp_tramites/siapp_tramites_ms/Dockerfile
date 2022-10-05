FROM node:16

WORKDIR /SIA++_tramites_ms

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "src/controller/app.js"]