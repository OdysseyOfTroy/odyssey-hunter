FROM node:lts-alpine
WORKDIR /app
COPY yarn.lock* /app
RUN yarn install
COPY . /app
EXPOSE 3000 
CMD ["yarn", "dev"]