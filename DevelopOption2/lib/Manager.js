// require Employee class
const Employee = require("./Employee");

// create a class called manager that extends Employee
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super()
        this.name = name
        
    }
}
// export manager
module.exports = Manager