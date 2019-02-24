const express = require('express')
const {Nuxt} = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
//const port = process.env.PORT || '3000'
const port = '3000'
// Import and set Nuxt.js options
let config = require('./nuxt.config.js')
console.log('[DEBUG]host:' + host);
console.log('[DEBUG]port:' + port);
const nuxt = new Nuxt(config)
// Give Nuxt middleware to express
app.use(nuxt.render)
// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port);