FROM node:alpine

CMD MKDIR app
COPY package.json package-lock.json entrypoint.js ./app/

WORKDIR ./app

RUN npm install --quiet --production

CMD ["node", "entrypoint.js"]
