const Koa = require('koa');
const bodyParser = require('koa-bodyparser')

const indexRoutes = require('./routes/index');
const locationRoutes = require('./routes/locations')

const app = new Koa();
const PORT = process.env.PORT || 3000

app.use(bodyParser())
app.use(indexRoutes.routes());
app.use(locationRoutes.routes());

const server = app.listen(PORT, ()=> {
    console.log(`Server listening on ${PORT}`)
})

module.exports = server