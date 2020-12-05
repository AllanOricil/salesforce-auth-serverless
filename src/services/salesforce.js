const axios = require('axios');
const qs = require('qs');

const getAccessToken = (requestBody) => {
    return axios.post(
        `${ process.env.TEST === 'true' ? 'https://test.salesforce.com' : 'https://login.salesforce.com'}/services/oauth2/token`, 
        qs.stringify(requestBody), 
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    );
}

module.exports = {
    getAccessToken
}
