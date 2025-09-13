module.exports = {
  apps: [
    {
      name: 'fukusito-webapp',
      script: 'npx',
      args: 'wrangler pages dev dist --ip 0.0.0.0 --port 3000',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      restart_delay: 1000,
      max_restarts: 10,
      min_uptime: '5s'
    }
  ]
}