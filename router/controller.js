const client = require('../client')
const errs = require('restify-errors')
class Controller {

}
Controller.detect = (args, res) => {
  const base64Img = args.target
  if (!base64Img) {
    res.json(new errs.BadRequestError('target is required!'))
  }
  client.detect(base64Img, { face_fields: 'age,beauty' })
    .then(function (result) {
      res.json(result)
    })
    .catch(e => {
      res.json(500, {
        code: e.name,
        message: e.message
      })
    })
}

Controller.match = (args, res) => {
  const base64Img1 = args.target1
  const base64Img2 = args.target2
  if (!base64Img1 && !base64Img2) {
    res.json(new errs.BadRequestError('target1 and target2 are required!'))
  }
  client.match([base64Img1, base64Img2])
    .then(function (result) {
      res.json(result)
    })
    .catch(e => {
      res.json(500, {
        code: e.name,
        message: e.message
      })
    })
}
module.exports = Controller
