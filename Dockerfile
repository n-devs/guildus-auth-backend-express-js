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

# If you are building your code for development
# RUN yarn ci --only=development
# RUN yarn install --development
# RUN yarn

# Bundle app source
# COPY . /app

ENV NODE_ENV=development

USER root

EXPOSE 9002
CMD ["pm2-runtime", "ecosystem.config.js"]


