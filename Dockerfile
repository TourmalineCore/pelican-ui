FROM node:20.11.1-alpine3.19 as build

# copying of only these 2 files with dependencies allows to cache them when these files aren't changing
# in this case when you change the code but not the dependencies they won't be re-installed again
COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

FROM node:20.11.1-alpine3.19

COPY package.json .
COPY package-lock.json .

# second installation of only production dependencies reduces the final docker image size
# with the default packages setup it was ~130MB size reduction from ~300MB to ~172MB
# however, it requires some additional time to re-install part of the deps that were installed in the first build stage
COPY --from=build /dist /dist

ENV PORT=80

EXPOSE 80

CMD node dist/src/main.js