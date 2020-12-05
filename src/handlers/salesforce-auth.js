const { getAccessToken } = require('../services/salesforce');

exports.main = async (event) => {
    const redirect_uri = `https://${event.headers.Host}/${event.requestContext.stage}${event.path}`;
    const code = event.queryStringParameters.code;

    try{
        const requestBody = {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            grant_type: 'authorization_code',
            code,
            redirect_uri
        }

        const salesforceAccessTokenResponse = await getAccessToken(requestBody);
    
        console.log(salesforceAccessTokenResponse.data);
        
        const salesforceAccessTokenData = salesforceAccessTokenResponse.data;

        const response = {
            statusCode: 200,
            body: JSON.stringify({salesforceAccessTokenData})
        }

        console.log(response);
        return response;
    }catch(error){
        console.error(error);
        const response = {
            statusCode: 400,
            body: JSON.stringify({
                message: 'Could not get Access Token'
            })
        }
        console.log(response);
        return response;
    };  
}