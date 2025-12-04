FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build -- --output-path=/usr/share/nginx/html --configuration production

FROM nginx:alpine

COPY --from=build /usr/share/nginx/html /usr/share/nginx/html

EXPOSE 80