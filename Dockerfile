# ---------- 1. Build Stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build Next.js app
RUN npm run build

# ---------- 2. Production Stage ----------
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

# Copy only required files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# OpenShift uses random UID → avoid permission issues
RUN chmod -R 777 /app

EXPOSE 3000

CMD ["npm", "start"]