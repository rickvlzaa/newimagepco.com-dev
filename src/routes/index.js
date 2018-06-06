const { Router } = require('express')
const { renderHtml } = require('../utils/template-engine')
const router = Router()

router.get('/', (req, res) => {
    res.send(renderHtml('index.hbs', {message: "HELLO INTERNET!"})).status(200)
})

module.exports = router