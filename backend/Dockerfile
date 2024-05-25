# syntax=docker/dockerfile:1

FROM node:21-alpine

WORKDIR /usr/app

COPY package.json .

RUN npm install --quiet

COPY ./ ./

RUN node swagger.js
