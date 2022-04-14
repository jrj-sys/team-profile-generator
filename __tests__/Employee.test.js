const Employee = require('../lib/Employee');

it('should create an Employee object with name, id, and email properties', () => {
    const employee = new Employee('JJ', '12345', 'email@email.com');

    expect(employee.name).toEqual('JJ');
    expect(employee.id).toEqual('12345');
    expect(employee.email).toEqual('email@email.com');
});

it('should return the name of the Employee', () => {
    const employee = new Employee('JJ', '12345', 'email@email.com');

    expect(employee.getName()).toEqual('JJ');
});

it('should return the ID of the Employee', () => {
    const employee = new Employee('JJ', '12345', 'email@email.com');

    expect(employee.getId()).toEqual('12345');
});

it('should return the email of the Employee', () => {
    const employee = new Employee('JJ', '12345', 'email@email.com');

    expect(employee.getEmail()).toEqual('email@email.com');
});

it('should return `Employee`', () => {
    const employee = new Employee('JJ', '12345', 'email@email.com');

    expect(employee.getRole()).toEqual('Employee');
});



