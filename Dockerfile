#Latest version of node tested on.
FROM node:lts-alpine

RUN apk add --no-cache python3 g++ make

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json AND yarn.json AND yarn-lock.json are copied
# where available (npm@5+)
COPY . /app

RUN npm install -g npm@8.19.1
RUN npm install -g pm2
RUN npm install

# If you are building your code for test
# RUN yarn ci --only=test
# RUN yarn install --test
# RUN yarn

# Bundle app source
# COPY . /app

ENV NODE_ENV=test

USER root

EXPOSE 9001
CMD ["pm2-runtime", "ecosystem.config.js"]


