'use strict'

const router = require('koa-router')();
const Controller = require('../controller/c-signup')


  router.post('/signup', Controller.postSignup)

  module.exports = router







