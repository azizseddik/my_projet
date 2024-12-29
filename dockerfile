# Step 1: Build the Angular app
FROM node:18 as build

# Set the working directory inside the container
WORKDIR /usr/local/app

# Copy package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Angular app
RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:latest

# Copy the built Angular app from the build stage
COPY --from=build /usr/local/app/dist/my-projet /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
