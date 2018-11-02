const router = require('koa-router')();
const Controller = require('../controller/login')


  router.post('/login', Controller.postLogin)

  module.exports = router