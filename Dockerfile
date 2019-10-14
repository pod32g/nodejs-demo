FROM node:current-alpine

WORKDIR /messageboard
COPY . /messageboard

RUN npm install
RUN npm install -g nodemon