module.exports = {
  apps : [{
    name: "guildus-auth-backend-express-js-prod",
    script: "./bin/www",
    env: {
      NODE_ENV: "production",
    }
  }]
}