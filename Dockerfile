FROM node:lts

WORKDIR /react-cool-starter

COPY package.json .

RUN yarn install --pure-lockfile

COPY . .

RUN yarn build

EXPOSE 8080

CMD ["npm", "start"]
