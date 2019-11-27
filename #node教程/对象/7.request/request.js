let request = require('request')

request('http://www.baidu.com', (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body)

    console.log('response.req:', Object.getOwnPropertyNames(response.req))
  }
})
