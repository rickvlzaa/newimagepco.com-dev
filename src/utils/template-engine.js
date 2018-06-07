const handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const TEMPLATEDIR = path.join(__dirname, '..', 'templates')
const PARTIALSDIR = path.join(TEMPLATEDIR, 'partials')
const PAGESDIR = path.join(TEMPLATEDIR, 'pages')

function registerPartials(directory) {
    const files = fs.readdirSync(directory)
    files.forEach(file => {
        const { name, base, ext } = path.parse(file)
        if(ext) {
            const pathToFile = path.join(directory, file)
            const relativePathToFile = path.relative(PARTIALSDIR, pathToFile)
            const source = fs.readFileSync(pathToFile, 'utf8')
            const partialName = relativePathToFile.replace('.hbs', '')
            
            handlebars.registerPartial(partialName, source)
        } else {
            const nestedDirectory = path.join(directory, file)
            registerPartials(nestedDirectory)
        }
    })
}


function renderHtml (filename, context = {}) {
    const filepath = path.join(PAGESDIR, filename)
    const source = fs.readFileSync(filepath, 'utf8')
    registerPartials(PARTIALSDIR)
    const template = handlebars.compile(source, {strict: true})
    return template(context)
}

module.exports = {
    renderHtml
}