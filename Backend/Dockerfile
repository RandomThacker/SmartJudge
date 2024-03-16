FROM node:21-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

# ENV MONGODB_USERNAME=root
# ENV MONGODB_PASSWORD=pass

CMD npm run start:dev
