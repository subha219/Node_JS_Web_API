const mssql = require('mssql');
class DBConnection {
    async getConnection() {
        try {
            return await mssql.connect({
                user: 'sa',
                password: 'sa#123*',
                server: 'DESKTOP-JP1EMFR',
                database: 'T0000000048',
                port: 1433,
                options: {
                    trustServerCertificate: true
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
}
module.exports = new DBConnection();