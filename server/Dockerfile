FROM node:lts-alpine
WORKDIR /usr/app
COPY yarn.lock* ./
RUN yarn --frozen-lockfile
COPY . .
EXPOSE 4000 
RUN yarn run build
CMD ["node", "dist/index.js"]