FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package*.json ./
RUN npm install
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3005
EXPOSE 3005
CMD ["node", ".output/server/index.mjs"]