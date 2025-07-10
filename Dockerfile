FROM node:21-alpine as base

# Install dependencies
FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Build
FROM base as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG CDN_ENABLED
ENV CDN_ENABLED=${CDN_ENABLED}
ARG CDN_DOMAIN
ENV CDN_DOMAIN=${CDN_DOMAIN}
ARG CORS_ORIGIN
ENV CORS_ORIGIN=${CORS_ORIGIN}
ARG ENABLE_SEO_INDEXING
ENV ENABLE_SEO_INDEXING=${ENABLE_SEO_INDEXING}

RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]
