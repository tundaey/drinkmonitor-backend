const Router = require('koa-router');
const queries = require('../../db/queries/location');

const router = new Router();
const BASE_URL = `/api/v1/locations`;

router.get(BASE_URL, async (ctx)=> {
    try {
        const locations = await queries.getAllLocations();
        ctx.body = {
            status: 'success',
            data: locations
        }
    }catch(err){
        console.log('get all locations error', err)
    }
})

router.post(`${BASE_URL}`, async (ctx)=> {
    try {
        const location = await queries.addLocation(ctx.request.body);
        if(location.length){
            ctx.status = 201;
            ctx.body = {
                status: 'success',
                data: location
            }
        }else{
            ctx.status = 400;
            ctx.body = {
                status: 'error',
                message: 'Something went wrong'
            }
        }

    }catch(err){
        console.log(err)
    }
})

module.exports = router;