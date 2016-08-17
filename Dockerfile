FROM node:6.1

# Initial start directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install node modules
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
RUN npm run build

CMD ["npm", "run", "release"]
