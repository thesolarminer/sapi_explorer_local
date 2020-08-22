FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY lerna.json ./

COPY ./packages/insight/package.json ./packages/insight/package.json

RUN ./node_modules/.bin/lerna bootstrap

COPY . .
EXPOSE 3000
EXPOSE 8100
CMD ["./node_modules/.bin/lerna", "run", "start"]
#CMD ["npm", "--prefix=./packages/bitcore-node", "start"]
#CMD ["npm", "--prefix=./packages/insight", "start"]
