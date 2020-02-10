FROM node:11
ARG NODE=production
ENV NODE_ENV ${NODE}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY dist/src .
# https://github.com/brentley/ecsdemo-nodejs/blob/master/Dockerfile
HEALTHCHECK --interval=10s --timeout=3s \
  CMD curl -f -s http://localhost:3000/healthCheck/ || exit 1
EXPOSE 3000
CMD [ "node", "index.js" ]

# docker build -t mymoidapis-service .
# docker run -p 3000:3000 mymoidapis-service
