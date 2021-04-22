FROM node:15-alpine AS BUILD_IMAGE
RUN apk update && apk add python make g++ && rm -rf /var/cache/apk/*
ARG NODE=production
ENV NODE_ENV ${NODE}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production

FROM node:15-alpine
COPY --from=BUILD_IMAGE /usr/src/app/node_modules ./node_modules
COPY dist .
HEALTHCHECK --interval=10s --timeout=3s \
  CMD curl -f -s http://localhost:3000/healthCheck/ || exit 1
EXPOSE 3000
CMD [ "node", "index.js" ]

# docker build -t mymoidapis-example .
# docker run -p 3000:3000 mymoidapis-example
