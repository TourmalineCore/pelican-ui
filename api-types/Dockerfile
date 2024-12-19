FROM node:20.18.0
RUN npm install swagger-typescript-api@13.0.23 -g
RUN mkdir /local
WORKDIR /local
COPY . .
CMD ["sh", "generate.sh"]