FROM node:20-slim

# Install OpenSSL 3 (required for Prisma on Debian 12)
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generate Prisma Client with OpenSSL 3 inside the container
RUN npx prisma generate

# Build TypeScript
RUN npm run build

EXPOSE 8080

CMD ["node", "dist/index.js"]
