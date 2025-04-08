# Use Node.js 18 (Alpine lightweight distribution) as the base image
FROM node:18-alpine

# Set working directory inside the image
WORKDIR /app

# Copy package.json (and package-lock.json if present)
COPY package*.json ./

# Install Node dependencies (only production dependencies, no dev dependencies needed)
RUN npm install --only=production

# Copy the application code
COPY app.js .

# Expose port 80 (container will listen on this port)
EXPOSE 80

# Define the startup command
CMD ["npm", "start"]
