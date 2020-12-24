const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const express = require('express')

module.exports = app => {
    app.use(bodyParser.json({limit: '50mb'}))
    app.use(cors())
    app.use('/', express.static(path.join(__dirname, '../dist/')))
    app.use('/auth', express.static(path.join(__dirname, '../dist/')))
}