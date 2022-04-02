# Base image
FROM node:alpine as builder 

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
COPY --from=builder /app/build /usr/share/nginx/html


