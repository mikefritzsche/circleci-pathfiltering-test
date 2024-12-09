# server/Dockerfile
FROM node:18.18.0-alpine as builder

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm ci

# Copy everything except what's in .dockerignore
COPY . .

# Use production env file
COPY .env.example .env

# Build the application
RUN npm run build

# Production image
FROM node:18.18.0-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built files
COPY --from=builder /app/dist ./dist
COPY .env .env

EXPOSE 3000
CMD ["npm", "start"]
