require('dotenv').config()

const Airtable = require('airtable-node');
 
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_KEY)
  .table(process.env.AIRTABLE_BASE_TABLE)


exports.handler = async (event, context) => {
    try {
        const data = await airtable.list()
        return {
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
            headers:{
                'Access-Control-Allow-Origin':'*',
            },
            statusCode:200,
            // body has to be a string, can stringify an object,arrays,ect...
            body:JSON.stringify(data)
    
        }
    } catch(error) {
        return {
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
            headers:{
                'Access-Control-Allow-Origin':'*',
            },
            statusCode:500,
            // body has to be a string, can stringify an object,arrays,ect...
            body:'Server Error'
    
        }
    }



}