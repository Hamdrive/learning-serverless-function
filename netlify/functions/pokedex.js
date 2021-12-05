import fetch from 'node-fetch';

exports.handler = async function(){
    const POKEDEX_API = "https://pokeapi.co/api/v2/pokedex/kanto/"

    const response = await fetch(POKEDEX_API)
    const data = await response.json()

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}

/* to work with an API in a serverless function, you have to use fetch/axios to handle the call,
but since serverless functions are basically a nodeJS server, they cannot have access to the builtin fetchAPI,
so we have to setup npm using `npm init` and then after setting up, install the respective libraries */

/* refer to https://answers.netlify.com/t/getting-must-use-import-to-load-es-module-when-using-node-fetch-in-netlify-functions/47230
to fix inability to import nodefetch because of v3, instead using v2 with this workaround*/