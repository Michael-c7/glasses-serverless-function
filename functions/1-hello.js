// domain/.netlify/functions/1-hello

const guy = {name:'bobo',age:34}

exports.handler = async (event, context) => {
    return {
        statusCode:200,
        // body has to be a string, can stringify an object,arrays,ect...
        body:JSON.stringify(guy)

    }
}