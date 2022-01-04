# NodeJsRestAPI
Learn to build a REST API in Node.js that performs read and write operations on a database in SQL Server.

In this article, we’ll take a step-by-step approach to help you in building a REST API in Node.js that performs read and write operations on a database in SQL Server.

At the end of this article, you should able to create a Node.js REST API performing CRUD operations on a database in SQL Server.


As per your own requirement , can change this part : 

const app = require('./app');
const server = require('http').Server(app);
server.listen(1337, 'localhost', () => {
    console.log('Server Started');
});
