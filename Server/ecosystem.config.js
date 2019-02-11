module.exports = {
  apps : [{
    name: 'API',
    script: 'src/index.js',
    instances: 1,
    autorestart: true,
    watch: true,
    watch_options: {
        usePolling: true,
    },
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
};
