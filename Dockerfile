FROM node:20-alpine

WORKDIR /app

COPY . /app

RUN npm install
RUN npm install -g gatsby-cli

RUN gatsby build

EXPOSE 80

# CMD gatsby serve --port 80 --host 0.0.0.0
CMD gatsby develop --port 80 --host 0.0.0.0
