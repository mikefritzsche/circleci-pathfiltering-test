# web-portal/Dockerfile
FROM node:18.18.0-alpine as builder

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Copy everything except what's in .dockerignore
COPY . .

# Use production env file
COPY .env.example .env

# Build the application
RUN npm run build

# Production image
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
