# Base image
FROM node:16.13.0-alpine as builder 

# Working directory
WORKDIR '/app'

COPY package.json .

# Install dependencies
RUN npm install

# Copy remaining files
COPY . .

# Build the project for production
RUN npm run build 

ADD ./.profile.d /app/.profile.d

# Run Stage Start
FROM nginx

RUN apk add --no-cache --update bash openssh openssl curl iproute2 python3
RUN ln -sf python3 /usr/bin/python
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN mkdir /app/.profile.d
ADD ./heroku-exec.sh /app/.profile.d/

# Copy production build files from builder phase to nginx
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'


