const Hapi = require('@hapi/hapi');
const {schema} = require('./validatorSchema')
const server = Hapi.server({port: 5004, host: 'localhost'})

server.route({
    method: 'POST',
    path: '/',
    handler:  async function(request) {
        const {payload} = request;
        console.log(typeof payload)
        let value;
        try {
            value = await schema.validateAsync(JSON.parse(payload))
            console.log(value);
        }catch(e){
            console.log(e)
            value = e.message;
        }
        return value
    }
})

server.start( err => {
    if(err) {
        throw err;
    }
    console.log('server started')
})
