# build ===============================
FROM node:10 as build

WORKDIR /ssr-portfolio

COPY package*.json ./
COPY . .

RUN npm ci
<<<<<<< HEAD
RUN npm install webpack -g
RUN ["npm", "run", "build:front"]
RUN ["npm", "run", "webpack"]
RUN ["npm", "run", "build"]
=======

RUN npm install webpack -g

RUN npm run build:front
RUN npm run build
>>>>>>> 1393405f88caf695495678bab130348eca49ff0c
# run ===============================
FROM node:10-alpine as run

WORKDIR /react-ssr-boilerplate

COPY --from=dist /ssr-portfolio .
COPY --from=build /ssr-portfolio .

EXPOSE 80

CMD ["npm", "run", "start:prod"]
