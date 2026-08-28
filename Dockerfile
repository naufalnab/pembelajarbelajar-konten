FROM node:22-bookworm-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . ./
RUN npm run build

FROM node:22-bookworm-slim AS runtime

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# vinext is the production server for this application. Its runtime is kept
# with the built output so the container can serve the Cloudflare-compatible
# bundle without a development build step at startup.
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["./node_modules/.bin/vinext", "start", "--port", "3000"]
