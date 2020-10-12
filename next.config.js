const path = require('path');

module.exports = {
    webpack: config => {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['public'] = path.join(__dirname, 'public')
        

        return config
    },
    env : {
        API_BASE_URL : process.env.API_BASE_URL || "http://127.0.0.1:5000"
    }

}