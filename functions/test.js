// domain/.netlify/functions/test

const testData = {name:'bob',age:34,alive:true}

exports.handler = async (event, context) => {
    return {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
        headers:{
            'Access-Control-Allow-Origin':'*',
        },
        statusCode:200,
        // body has to be a string, can stringify an object,arrays,ect...
        body:JSON.stringify(testData)

    }
}