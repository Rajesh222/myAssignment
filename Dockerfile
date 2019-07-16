# Base image
FROM node:latest

# Creating working directory
RUN mkdir -p /usr/src/app
#set Working directory
WORKDIR /usr/src/app

# Copy all the files from current directory to docker
COPY package*.json /usr/src/app/

# Install all the dependencies
RUN npm install

ADD src /usr/src/app/src
ADD public /usr/src/app/public

# Build the app
CMD npm build

CMD ["npm", "start"]