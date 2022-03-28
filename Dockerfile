FROM node:16-alpine

WORKDIR /workspace

COPY ./ /workspace
RUN npm i

EXPOSE 8080
