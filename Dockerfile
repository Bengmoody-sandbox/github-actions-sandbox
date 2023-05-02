FROM node:19-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "main.js"]
EXPOSE 3000