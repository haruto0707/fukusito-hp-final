#!/usr/bin/env node

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
console.log(`📍 Server running at http://localhost:${port}`)
console.log('🏠 Website: http://fukusito.net')
console.log('📧 Contact: info@fukusito.net')

serve({
  fetch: nodeApp.fetch,
  port
})
