#!/bin/bash

# FukusITo Website Server Installation Script

echo "🚀 Installing FukusITo Website Server..."

# Create logs directory
mkdir -p logs

# Install Node.js dependencies
echo "📦 Installing dependencies..."
npm install

# Set proper permissions
echo "🔒 Setting permissions..."
chmod +x server.js
chmod 644 package.json
chmod 644 ecosystem.config.cjs

echo "✅ Installation complete!"
echo ""
echo "🚀 To start the server:"
echo "   npm start"
echo ""
echo "🔧 To start with PM2:"
echo "   npm install -g pm2"
echo "   pm2 start ecosystem.config.cjs"
echo ""
echo "📍 Server will be available at:"
echo "   http://localhost:3000"
echo "   http://your-domain.com:3000"
