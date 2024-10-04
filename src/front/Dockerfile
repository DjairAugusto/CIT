FROM node:lts

ENV HOME=/app

WORKDIR $HOME
COPY package.json package-lock.json ./
RUN npm ci

ENTRYPOINT [ "npm", "run", "start" ]