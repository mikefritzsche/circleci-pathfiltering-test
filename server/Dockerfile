FROM node:18.18.0-alpine as builder

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm ci

# Copy source code and babel config
COPY . .

# Create dist directory
RUN mkdir -p dist

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

# Copy .env file if needed
COPY .env .env

EXPOSE 3000
CMD ["npm", "start"]
