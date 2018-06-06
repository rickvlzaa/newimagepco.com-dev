const handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')


const renderHtml = (filename, context = {}) => {
    const filepath = path.join(__dirname, '../templates/', filename)
    const source = fs.readFileSync(filepath, 'utf8')
    const template = handlebars.compile(source, {strict: true})
    return template(context)
}

module.exports = {
    renderHtml
}