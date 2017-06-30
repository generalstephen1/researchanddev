FROM mhart/alpine-node:6.2.0

LABEL name "now-dockerfile-example"

RUN mkdir /app
WORKDIR . /app
COPY package.json /app
RUN npm install
COPY index.js /app

EXPOSE 5000
CMD ["npm", "start"]
