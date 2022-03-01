FROM node:16 as build
WORKDIR /app
COPY . .
# COPY package.json ./
RUN yarn
RUN yarn build
# Production
FROM nginx:stable-alpine
COPY - from=build /app/build /usr/share/nginx/html
COPY - from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
#CMD ["npm", "start"]