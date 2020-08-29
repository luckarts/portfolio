

FROM node:12-alpine AS build_image

# couchbase sdk requirements
RUN apk update && apk add yarn curl bash python g++ make && rm -rf /var/cache/apk/*

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci
RUN npm install sharp
COPY . .

RUN npm run build

# remove development dependencies
RUN npm prune --production

# build application

FROM node:12-alpine

WORKDIR /usr/src/app

COPY --from=build_image /usr/src/app/package*.json ./
COPY --from=build_image /usr/src/app/dist ./dist
COPY --from=build_image /usr/src/app/build ./build
COPY --from=build_image /usr/src/app/node_modules ./node_modules
CMD ["npm", "start"]
