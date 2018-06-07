const { Router } = require('express')
const { renderHtml } = require('../utils/template-engine')
const router = Router()

router.get('/', (req, res) => {
    res.send(renderHtml('home.hbs', {
        sections: [{name: "home", selected: true, active: true}, {name: "about", middle: false}, {name: "contact"}]
    })).status(200)
})

module.exports = router