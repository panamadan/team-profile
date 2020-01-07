// require Employee class
const Employee = require("./Employee");

// create a class called intern that extends Employee
class Engineer extends Employee{
    constructor(name, id, email, GitHub){
        super(name, id, email);
        this.GitHub = GitHub

    }
    getGithub(){
        return this.GitHub;
    }
    getRole(){
        return "Engineer";
    }
}



// export employee
