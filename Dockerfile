FROM node:20.11.1-alpine3.19 as build

# copying of only these 2 files with dependencies allows to cache them when these files aren't changing
# in this case when you change the code but not the dependencies they won't be re-installed again
COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

ENV PORT=80

EXPOSE 80

CMD node src/main.js