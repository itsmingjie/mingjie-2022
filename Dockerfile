    
FROM node:16-alpine as build
RUN apk update
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --chown=node package*.json ./
COPY --chown=node next.config.js ./
RUN CYPRESS_INSTALL_BINARY=0 npm install
COPY --chown=node . .
RUN mkdir -p /tmp/logs && touch /tmp/logs/combined.logs

# MULTI-STAGE BUILD
FROM node:16-alpine
COPY --from=build /home/node/app /home/node/app
WORKDIR /home/node/app
ENV PORT=3001
CMD npm run dev
