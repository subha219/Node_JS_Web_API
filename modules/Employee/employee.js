const employeeMssql = require('./employee.mssql');


class employee {
    async  getAllEmployees(req, res) {
        try {
            const output = await employeeMssql.getAllEmployees();
            res.send(output);
        }
        catch (error) {
            console.log(error);
        }
    }
}
module.exports = new employee();