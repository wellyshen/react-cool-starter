# Stage 1 - the build process
FROM node:12.13.0 as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
RUN npm install pm2 -g
EXPOSE 8080

CMD ["pm2-runtime", "start", "npm", "--", "start"]
