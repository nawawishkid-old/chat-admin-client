FROM nginx 

WORKDIR /usr/share/nginx/html
COPY ./dist/* ./
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf

CMD [ "nginx", "-g", "daemon off;" ]
