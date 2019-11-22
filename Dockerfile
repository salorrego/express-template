FROM node:10

WORKDIR /usr/app
ENV PATH /usr/app/node_modules/.bin:$PATH
COPY . /usr/app
RUN npm install --unsafe-perm --quiet --no-progress
RUN npm test

EXPOSE 3000
ENTRYPOINT node app.js
