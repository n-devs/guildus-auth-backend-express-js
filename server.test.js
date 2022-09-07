import supertest from 'supertest'
import chai from 'chai'
import server from '../../src/server'
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);


const { expect } = chai
const request = supertest.agent(server)

describe('General route', () => {
  it('Enter home page', (done) => {
    request
      .get('/')
      .then((res) => {
        let result = res.res.text
        expect(result).to.equal('Hello world')
        done()
      })
      .catch((error) => {
        console.error(error)
        done()
      })
  })
})