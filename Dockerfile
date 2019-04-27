FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY src/ ./src/
# Install node packages
RUN npm install
# RUN npm ci --only=production

# Build the next.js files for our server.js
RUN npm run-script build

# Bundle app source
COPY . .

# Open localhost:80
EXPOSE 80

# Run server.js
CMD [ "npm", "start" ]