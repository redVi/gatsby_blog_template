FROM node:20-alpine

WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .

EXPOSE 8080

ENV CHOKIDAR_USEPOLLING=1
ENV GATSBY_WEBPACK_PUBLICPATH=/

CMD ["npm", "run", "dev"]
