
FROM  ubuntu:16.04 AS build_image

WORKDIR /usr/src/app
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs

RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin
COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

# remove development dependencies
RUN npm prune --production

RUN /usr/local/bin/node-prune


# build application

FROM node:12-alpine

WORKDIR /usr/src/app

COPY --from=build_image /usr/src/app/package*.json ./
COPY --from=build_image /usr/src/app/dist ./dist
COPY --from=build_image /usr/src/app/build ./build
COPY --from=build_image /usr/src/app/node_modules ./node_modules
CMD ["npm", "start"]
