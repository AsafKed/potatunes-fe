# Use a Node 16 base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy app files
COPY . .

# ==== BUILD ====
# Install dependencies, ci installs the exact versions from package-lock.json (for production)
RUN npm ci

# Build the app
RUN npm run build

# ==== RUN ====
# Set the environment to production
ENV NODE_ENV=production

# Expose the port
EXPOSE 3000

# Run the app
CMD ["npx", "serve", "build"]