#!/usr/bin/env node

/**
 * Server Build Script for FukusITo Website
 * Creates a Node.js server version using @hono/node-server
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Building Node.js server version...');

// Create server output directory
const serverDir = path.join(__dirname, 'server-build');
if (!fs.existsSync(serverDir)) {
  fs.mkdirSync(serverDir, { recursive: true });
}

// Copy source files
const srcFiles = ['src/', 'public/'];
for (const srcFile of srcFiles) {
  const srcPath = path.join(__dirname, srcFile);
  const destPath = path.join(serverDir, srcFile);
  
  if (fs.existsSync(srcPath)) {
    fs.cpSync(srcPath, destPath, { recursive: true });
    console.log(`✅ Copied ${srcFile}`);
  }
}

// Create server.js entry point
const serverContent = `#!/usr/bin/env node

/**
 * FukusITo Website - Node.js Server
 * Production server using Hono with Node.js adapter
 */

import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import app from './src/index.js'

// Replace Cloudflare static middleware with Node.js version
// Remove the existing serveStatic middleware
const originalApp = app;

// Create new app without Cloudflare-specific middleware
import { Hono } from 'hono'
import { renderer } from './src/renderer.js'

const nodeApp = new Hono()

// Serve static files using Node.js adapter
nodeApp.use('/static/*', serveStatic({ root: './public' }))

// Add renderer
nodeApp.use(renderer)

// Copy all routes from original app
// Note: This is a simplified approach. In production, you might want to 
// refactor the route definitions to be shared between Cloudflare and Node.js versions

// Import route handlers (you may need to adjust based on your app structure)
const routes = [
  { method: 'GET', path: '/', handler: async (c) => {
    // Your home page JSX content here
    // You can copy from src/index.js
    const request = new Request('http://localhost:3000/')
    const response = await originalApp.fetch(request)
    return new Response(await response.text(), {
      headers: { 'Content-Type': 'text/html' }
    })
  }},
  // Add other routes as needed
]

// Basic route copying (simplified)
nodeApp.get('/', async (c) => {
  const request = new Request('http://localhost:3000' + c.req.path)
  const response = await originalApp.fetch(request, {}, { 
    // Mock Cloudflare environment
    env: {},
    ctx: {}
  })
  return new Response(await response.text(), {
    headers: { 'Content-Type': 'text/html' }
  })
})

// Copy all other routes
const paths = ['/', '/privacy', '/terms', '/commercial', '/contact', '/product-helpconnect']
for (const routePath of paths) {
  if (routePath === '/') continue // Already handled above
  
  nodeApp.get(routePath, async (c) => {
    try {
      const request = new Request('http://localhost:3000' + routePath)
      const response = await originalApp.fetch(request, {}, {
        env: {},
        ctx: {}
      })
      return new Response(await response.text(), {
        headers: { 'Content-Type': 'text/html' }
      })
    } catch (error) {
      return c.text('Page not found', 404)
    }
  })
}

// API routes
nodeApp.get('/api/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() })
})

const port = process.env.PORT || 3000

console.log('🚀 Starting FukusITo server...')
console.log(\`📍 Server running at http://localhost:\${port}\`)
console.log('🏠 Website: http://fukusito.net')
console.log('📧 Contact: info@fukusito.net')

serve({
  fetch: nodeApp.fetch,
  port
})
`;

fs.writeFileSync(path.join(serverDir, 'server.js'), serverContent);
console.log('✅ Created server.js');

// Create package.json for server
const serverPackageJson = {
  "name": "fukusito-website-server",
  "version": "1.0.0",
  "type": "module",
  "description": "FukusITo Website - Node.js Server Version",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js",
    "install-deps": "npm install hono @hono/node-server"
  },
  "dependencies": {
    "hono": "^4.9.7",
    "@hono/node-server": "^1.12.0"
  },
  "keywords": ["fukusito", "welfare", "technology", "startup", "hono", "nodejs"],
  "author": "FukusITo",
  "license": "MIT"
};

fs.writeFileSync(
  path.join(serverDir, 'package.json'), 
  JSON.stringify(serverPackageJson, null, 2)
);
console.log('✅ Created package.json for server');

// Create ecosystem.config.cjs for PM2
const pm2Config = `module.exports = {
  apps: [{
    name: 'fukusito-website',
    script: 'server.js',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    instances: 1,
    exec_mode: 'cluster',
    watch: false,
    max_memory_restart: '1G',
    log_file: './logs/combined.log',
    out_file: './logs/out.log',
    error_file: './logs/error.log',
    log_date_format: 'YYYY-MM-DD HH:mm Z'
  }]
}`;

fs.writeFileSync(path.join(serverDir, 'ecosystem.config.cjs'), pm2Config);
console.log('✅ Created PM2 configuration');

// Create installation script
const installScript = `#!/bin/bash

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
`;

fs.writeFileSync(path.join(serverDir, 'install.sh'), installScript);
fs.chmodSync(path.join(serverDir, 'install.sh'), '755');
console.log('✅ Created installation script');

// Create README for server deployment
const serverReadme = `# FukusITo Website - Node.js Server Version

## 📋 Requirements

- Node.js 18+ 
- npm or yarn
- PM2 (optional, for production)

## 🚀 Quick Start

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Start the server:**
   \`\`\`bash
   npm start
   \`\`\`

3. **Access the website:**
   - Local: http://localhost:3000
   - Production: http://your-domain.com:3000

## 🔧 Production Deployment

### Using PM2 (Recommended)

1. **Install PM2:**
   \`\`\`bash
   npm install -g pm2
   \`\`\`

2. **Start with PM2:**
   \`\`\`bash
   pm2 start ecosystem.config.cjs
   \`\`\`

3. **Setup auto-restart:**
   \`\`\`bash
   pm2 startup
   pm2 save
   \`\`\`

### Using systemd (Linux)

1. **Create service file:** \`/etc/systemd/system/fukusito.service\`
   \`\`\`ini
   [Unit]
   Description=FukusITo Website
   After=network.target

   [Service]
   Type=simple
   User=www-data
   WorkingDirectory=/path/to/server-build
   ExecStart=/usr/bin/node server.js
   Restart=always
   Environment=NODE_ENV=production
   Environment=PORT=3000

   [Install]
   WantedBy=multi-user.target
   \`\`\`

2. **Enable and start:**
   \`\`\`bash
   sudo systemctl enable fukusito
   sudo systemctl start fukusito
   \`\`\`

## 🌐 Reverse Proxy (Nginx)

Create Nginx configuration:

\`\`\`nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
\`\`\`

## 📞 Support

- Email: info@fukusito.net
- Website: https://fukusito.net
`;

fs.writeFileSync(path.join(serverDir, 'README.md'), serverReadme);
console.log('✅ Created README.md');

console.log(`
🎉 Node.js server build complete!

📂 Files generated in: ${serverDir}

🚀 To deploy:
1. Upload '${serverDir}' folder to your server
2. Run: chmod +x install.sh && ./install.sh
3. Start: npm start or pm2 start ecosystem.config.cjs

🌐 Your website will be accessible at: http://your-domain.com:3000
`);