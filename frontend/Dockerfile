# Use an official node runtime as a parent image
FROM node:20


# Set working directory inside the container to frontend root
WORKDIR /frontend

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json /frontend/
RUN npm install

# Copy the rest of the frontend code
COPY . /frontend/

# Build the React application
RUN npm run build

# Expose port 3000 to access the React app
EXPOSE 3000

# Serve the app using the `serve` package
RUN npm install -g serve
CMD ["serve", "-s", "build"]
