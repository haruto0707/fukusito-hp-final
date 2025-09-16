# FukusITo Website - Node.js Server Version

## 📋 Requirements

- Node.js 18+ 
- npm or yarn
- PM2 (optional, for production)

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Access the website:**
   - Local: http://localhost:3000
   - Production: http://your-domain.com:3000

## 🔧 Production Deployment

### Using PM2 (Recommended)

1. **Install PM2:**
   ```bash
   npm install -g pm2
   ```

2. **Start with PM2:**
   ```bash
   pm2 start ecosystem.config.cjs
   ```

3. **Setup auto-restart:**
   ```bash
   pm2 startup
   pm2 save
   ```

### Using systemd (Linux)

1. **Create service file:** `/etc/systemd/system/fukusito.service`
   ```ini
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
   ```

2. **Enable and start:**
   ```bash
   sudo systemctl enable fukusito
   sudo systemctl start fukusito
   ```

## 🌐 Reverse Proxy (Nginx)

Create Nginx configuration:

```nginx
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
```

## 📞 Support

- Email: info@fukusito.net
- Website: https://fukusito.net
