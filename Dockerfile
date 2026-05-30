
# STEP 1: BUILD STAGE
FROM  node:20-alpine AS build 
# To build our app using light version of node
WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


#SERVE STAGE  (NGINX)

FROM nginx:stable-alpine

COPY --from=build  /app/dist  /usr/share/nginx/html

RUN echo 'server {listen 80; location / {root/usr/nginx/html; index index.html; try_file $uri $uri/ /index.html}}' > /etc/nginx/config.d/default.conf

EXPOSE 80
CMD [ "nginx","-g","daemon-off;" ]

