#Latest version of node tested on.
FROM node:16-alpine

RUN apt-get update && apt-get install -y locales
RUN apk add --no-cache python2 g++ make

# Create app directory
WORKDIR /app/services

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json AND yarn.json AND yarn-lock.json are copied
# where available (npm@5+)
COPY package.json /app/services

RUN npm i -g yarn --unsafe-perm
RUN npm install -g pm2@2.3.0 --unsafe-perm

# If you are building your code for production
# RUN yarn ci --only=production
RUN yarn install --production

ENV NODE_ENV=production

USER app

EXPOSE 9002
CMD ["yarn", "prod"]


