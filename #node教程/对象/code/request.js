var request = require('request');
request('http://www.baidu.com', function (error, response, body) {
    if (!error && response.statusCode === 200) {

      console.log(response.req)

    }
})

