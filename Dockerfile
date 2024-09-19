FROM node:20.11.1-alpine3.19 as build

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

ENV PORT 80

EXPOSE 80

CMD ["npm", "run", "start"]
