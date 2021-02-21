
FROM node:14.15.4

RUN mkdir app

WORKDIR /app

ADD . /app

RUN yarn install

EXPOSE 3333

# CMD ["yarn", "start"]