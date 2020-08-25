FROM node:10.15.3-jessie

COPY . .
COPY package*.json ./
RUN npm ci

RUN npm run build

CMD ["npm", "start"]

