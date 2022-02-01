FROM node:12-alpine

ARG SERVICE_PORT=3000

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

RUN npm install pm2 -g

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE ${SERVICE_PORT}

CMD ["pm2-runtime", "index.js"]

USER node