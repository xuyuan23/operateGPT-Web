FROM node:lts

WORKDIR /app
COPY . /app

RUN npm install -g create-react-app
RUN npm install react-scripts --save-dev
RUN npm run build

EXPOSE 3200

CMD ["npm", "start"]
