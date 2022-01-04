const employee = require('./employee');
const express = require('express');
const router = express.Router();
class EmployeeController {
    constructor(app) {
        router.get('/', employee.getAllEmployees);
        app.use('/api/v1/employees', router);
    }
}
module.exports = EmployeeController;