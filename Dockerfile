ARG BASE_IMG=node:20-alpine

# Create prod dependencies
FROM --platform=$BUILDPLATFORM $BASE_IMG as prod_deps
COPY package*.json ./
RUN npm ci --only=production

# Build stage
FROM --platform=$BUILDPLATFORM $BASE_IMG as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Final stage, files for release

FROM $BASE_IMG as release
RUN apk update && \
    apk upgrade && \
    rm -rf /var/cache/apk/*
ENV NODE_ENV production
ENV DD_SERVICE streamyard-clone-api
WORKDIR /app
RUN mkdir -p dist && \
    mkdir -p node_modules && \
    chown node:node /app

COPY --from=prod_deps --chown=node:node /node_modules/ /node_modules
COPY --from=build --chown=node:node /app/dist/ /dist

USER node
EXPOSE 3000
CMD ["node", "index.js"]

