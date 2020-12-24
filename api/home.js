module.exports = app => {
    const path = require('path')
    const index = (req, res) => {
        res.sendFile(path.join(__dirname, '../dist/index.html'))
    }

    return { index }
}