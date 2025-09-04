# Step 1: Use Node.js official image
FROM node:20-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the source code
COPY . .

# Step 5: Expose the port your app runs on
EXPOSE 3000

# Step 6: Command to start app
CMD ["npm", "run", "dev"]
