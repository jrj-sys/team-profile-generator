class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }

    getRole() {
        return `Employee`
    }
}

const employee = new Employee('JJ', '12345', 'email@email.com');

console.log(employee.getRole());


module.exports = Employee;