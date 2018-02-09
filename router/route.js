'use strict'

var Router = require('restify-router').Router
var router = new Router()
var controller = require('../router/controller.js')
router.post('/detect', function (req, res, next) {
  controller.detect(req.params, res)
  return next()
})

router.post('/match', function (req, res, next) {
  controller.match(req.params, res)
  return next()
})

router.get('/', function (req, res, next) {
  res.json({"hello":"world"})
})
module.exports = router
