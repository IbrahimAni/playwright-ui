FROM mcr.microsoft.com/playwright:focal

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install Playwright browsers
RUN npx playwright install

# Expose the port your app runs on
EXPOSE 3000

# Run the tests
CMD ["npm", "test"]
