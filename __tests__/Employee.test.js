const Employee = require('../lib/Employee');

it('should create an Employee object with name, id, and email properties', () => {
    const employee = new Employee('JJ', '12345', 'email@email.com');

    expect(employee.name).toEqual('JJ');
    expect(employee.id).toEqual('12345');
    expect(employee.email).toEqual('email@email.com');
});
    
