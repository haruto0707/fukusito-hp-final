#!/usr/bin/env node

/**
 * Static Site Builder for FukusITo Website
 * Generates static HTML files for deployment to any web server
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import our Hono app
const { default: app } = await import('./dist/_worker.js');

// Pages to generate
const pages = [
  { path: '/', filename: 'index.html' },
  { path: '/privacy', filename: 'privacy.html' },
  { path: '/terms', filename: 'terms.html' },
  { path: '/contact', filename: 'contact.html' },
  { path: '/product-helpconnect', filename: 'product-helpconnect.html' }
];

// Create static output directory
const staticDir = path.join(__dirname, 'static-build');
if (!fs.existsSync(staticDir)) {
  fs.mkdirSync(staticDir, { recursive: true });
}

// Copy static assets
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, staticDir, { recursive: true });
  console.log('✅ Copied static assets from public/');
}

// Generate HTML pages
for (const page of pages) {
  try {
    console.log(`📄 Generating ${page.filename}...`);
    
    // Create a mock Request object
    const request = new Request(`http://localhost:3000${page.path}`, {
      method: 'GET',
      headers: {
        'Accept': 'text/html',
        'User-Agent': 'Static Site Generator'
      }
    });

    // Get response from Hono app
    const response = await app.fetch(request);
    
    if (response.ok) {
      let html = await response.text();
      
      // Fix static file paths for relative URLs
      html = html.replace(/href="\/static\//g, 'href="./static/');
      html = html.replace(/src="\/static\//g, 'src="./static/');
      
      // Write HTML file
      fs.writeFileSync(path.join(staticDir, page.filename), html);
      console.log(`✅ Generated ${page.filename}`);
    } else {
      console.error(`❌ Failed to generate ${page.filename}: ${response.status}`);
    }
    
  } catch (error) {
    console.error(`❌ Error generating ${page.filename}:`, error.message);
  }
}

// Create .htaccess for Apache servers (optional)
const htaccess = `
# FukusITo Website - Apache Configuration
RewriteEngine On

# Remove .html extension from URLs (only if mod_rewrite is available)
<IfModule mod_rewrite.c>
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^([^\.]+)$ $1.html [NC,L]
</IfModule>

# Directory browsing security
Options -Indexes

# Protect sensitive files
<Files ~ "^\.">
Order allow,deny
Deny from all
</Files>

# MIME type for CSS and JS files
<IfModule mod_mime.c>
AddType text/css .css
AddType application/javascript .js
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType text/css "access plus 1 month"
ExpiresByType application/javascript "access plus 1 month"
ExpiresByType image/png "access plus 1 month"
ExpiresByType image/jpg "access plus 1 month"
ExpiresByType image/jpeg "access plus 1 month"
ExpiresByType image/gif "access plus 1 month"
ExpiresByType image/svg+xml "access plus 1 month"
</IfModule>

# Enable compression (if mod_deflate is available)
<IfModule mod_deflate.c>
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/xml
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Security headers (if mod_headers is available)
<IfModule mod_headers.c>
Header always set X-Frame-Options DENY
Header always set X-Content-Type-Options nosniff
Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Fallback for servers without URL rewriting
# Direct access to HTML files will still work
DirectoryIndex index.html
`;

fs.writeFileSync(path.join(staticDir, '.htaccess'), htaccess.trim());
console.log('✅ Created .htaccess for Apache');

// Create nginx.conf sample
const nginxConf = `
# FukusITo Website - Nginx Configuration Sample
# Place this in your server block

location / {
    try_files $uri $uri.html $uri/ =404;
}

# Remove .html extension from URLs
location ~ ^/(.*)\.html$ {
    return 301 /$1;
}

# Cache static assets
location ~* \\.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1M;
    add_header Cache-Control "public, immutable";
}

# Security headers
add_header X-Frame-Options DENY;
add_header X-Content-Type-Options nosniff;
add_header Referrer-Policy "strict-origin-when-cross-origin";
`;

fs.writeFileSync(path.join(staticDir, 'nginx.conf.sample'), nginxConf.trim());
console.log('✅ Created nginx.conf.sample');

console.log(`
🎉 Static site build complete!

📂 Files generated in: ${staticDir}

📋 Upload Instructions:
1. Upload all files from '${staticDir}' to your web server's document root
2. Ensure your server supports URL rewriting (.htaccess for Apache)
3. Set proper file permissions (644 for files, 755 for directories)

🌐 Your website will be accessible at: http://your-domain.com
`);