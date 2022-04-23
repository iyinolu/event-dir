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

# Run Stage Start
FROM nginx

# Copy production build files from builder phase to nginx
# COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

CMD /bin/bash -c "envsubst '\$PORT' /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'


