FROM node:18.18.0-alpine as builder

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm ci

# Copy source code and config files first
COPY . .

# Build the application
RUN npm run build

# Production image
FROM node:18.18.0-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built files from builder stage
COPY --from=builder /app/dist ./dist

# Create a default .env if not exists
RUN echo "PORT=3000\nNODE_ENV=production" > .env

EXPOSE 3000
CMD ["npm", "start"]
