module.exports = {
  apps : [{
    name: "guildus-auth-backend-express-js-prod",
    script: "./bin/www",
    exec_mode: 'cluster',
    instances: 1,
    env: {
      NODE_ENV: "test",
    }
  }]
}