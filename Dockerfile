# Use an official Node.js 18 image as the base
FROM node:18-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY package*.json ./

# Install dependencies
RUN sudo apt install npm
RUN npm install

# Copy the application code into the container
COPY . .

# Expose the port that the application listens on
EXPOSE 5173

# Run the command to start the application
CMD [ "node", "server.js" ]