'use strict'

const router = require('koa-router')();


router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>请求不处理,滚</h1>`
})

router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>请求不处理,滚</h1>`
})

  module.exports = router