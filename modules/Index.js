class Module {
    constructor(app) {
        this.app = app;
    }
    init() {
        const employeecontroller = require('./Employee/employee.controller');
        new employeecontroller(this.app);
    }
}
module.exports = Module;