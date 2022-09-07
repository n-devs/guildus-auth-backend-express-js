module.exports = {
  apps : [{
    name: "guildus-auth-backend-express-js-prod",
    script: "./bin/www",
    exec_mode: 'cluster',
    instances: 2,
    env: {
      NODE_ENV: "production",
    }
  }]
}