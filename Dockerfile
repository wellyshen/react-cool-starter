# Stage 1 - the build process
FROM node:12.13.0-alpine as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN npm i
COPY . ./
RUN npm run build

# Stage 2 - the production environment
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
