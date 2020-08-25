# build ===============================
RUN npm install webpack -g

FROM node:10 as build

WORKDIR /ssr-portfolio

COPY package*.json ./
COPY . .

RUN npm ci

RUN npm run webpack
RUN npm run build

# run ===============================
FROM node:10-alpine as run

WORKDIR /react-ssr-boilerplate

COPY --from=dist /ssr-portfolio .
COPY --from=build /ssr-portfolio .

EXPOSE 80

CMD ["npm", "run", "start:prod"]
