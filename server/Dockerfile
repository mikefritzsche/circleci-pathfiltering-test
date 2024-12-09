# Server Dockerfile
FROM node:18.18.0-alpine

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Only keep production dependencies
RUN npm ci --only=production

# Use node directly for better signal handling
CMD ["node", "dist/index.js"]
