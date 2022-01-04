const mssqlcon = require('../../dbconnection');
class EmployeeMSSql {
    async getAllEmployees() {
        const conn = await mssqlcon.getConnection();
        const res = await conn.request().query('SELECT Distinct emp.EmployeeNo,emp.FirstName,ou.OUNAME FROM tblMemployee emp LEFT OUTER JOIN tblREmployeeOUMapping ouemp ON emp.EmployeeID=ouemp.EmployeeID and ouemp.Active=1 LEFT OUTER JOIN Psp_OU ou ON ouemp.OUID=ou.ID LEFT OUTER JOIN dbo.tblREmployeeJobTitle  empjt ON emp.EmployeeID=empjt.EmployeeID and empjt.Active=1 where emp.EmpActive=1 order by emp.EmployeeNo desc');
        return res.recordset;
    }
}
module.exports = new EmployeeMSSql();