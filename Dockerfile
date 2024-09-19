FROM node:20.11.1-alpine3.19 as build

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

ENV PORT 8081

EXPOSE 8081

CMD ["npm", "run", "start"]
