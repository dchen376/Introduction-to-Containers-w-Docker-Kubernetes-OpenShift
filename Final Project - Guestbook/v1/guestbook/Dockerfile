# Please choose from the below set of Docker commands to complete your Dockerfile:

# COPY -  The COPY command enables us to copy files to our image.
# RUN - he RUN instruction executes commands.
# ADD  - The ADD command is used to copy files/directories into a Docker image.
# EXPOSE - The EXPOSE instruction exposes a particular port with a specified protocol inside a Docker Container.
# FROM
# CMD - The CMD instruction provides a default for executing a container, or in other words, an executable that should run in your container.
# PUSH
# PULL
# WORKDIR

# The FROM instruction initializes a new build stage and specifies the base image that subsequent instructions will build upon.
FROM golang:1.18 AS builder

WORKDIR /app

# The COPY command enables us to copy files to our image.
COPY main.go . 

RUN go mod init guestbook
RUN go mod tidy

# Build the Go application.
RUN go build -o main main.go

# Specify the runtime base image.
FROM ubuntu:18.04

# Use COPY to copy the built binary from the builder stage to the runtime image.
COPY --from=builder /app/main /app/guestbook

# Use COPY to copy static files into the runtime image.
COPY public/index.html /app/public/index.html
COPY public/script.js /app/public/script.js
COPY public/style.css /app/public/style.css
COPY public/jquery.min.js /app/public/jquery.min.js

# Set the working directory for the container.
WORKDIR /app

# Specify the command to execute when the container starts.
CMD ["./guestbook"]

# Expose port 3000 for the application.
EXPOSE 3000
