const app = require('./app');
const server = require('http').Server(app);
server.listen(1337, 'localhost', () => {
    console.log('Server Started');
});