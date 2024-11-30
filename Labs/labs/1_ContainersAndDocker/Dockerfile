FROM node:9.4.0-alpine
COPY app.js .
COPY package.json .
RUN npm install &&\
    apk update &&\
    apk upgrade
EXPOSE  8080
CMD node app.js

# The FROM instruction initializes a new build stage and specifies the base image that subsequent instructions will build upon.

# The COPY command enables us to copy files to our image.

# The RUN instruction executes commands.

# The EXPOSE instruction exposes a particular port with a specified protocol inside a Docker Container.

# The CMD instruction provides a default for executing a container, or in other words, an executable that should run in your container.
