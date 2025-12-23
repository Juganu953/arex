FROM node:18-alpine AS builder
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm ci

COPY . .
RUN npx prisma generate && npm run build

FROM node:18-alpine AS runner
WORKDIR /app

COPY package.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

ENV NODE_ENV=production
EXPOSE 8080
CMD ["node", "dist/index.js"]
