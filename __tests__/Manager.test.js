const Manager = require('../lib/Manager');

it('should create a Manager object that extends Employee class with an officeNumber', () => {
    const manager = new Manager('JJ', '12345', 'email@email.com', '3');

    expect(manager.name).toEqual('JJ');
    expect(manager.id).toEqual('12345');
    expect(manager.email).toEqual('email@email.com');
    expect(manager.officeNumber).toEqual('3');
});

it('should return the name of the Manager', () => {
    const manager = new Manager('JJ');

    expect(manager.getName()).toEqual('JJ');
});

it('should return the ID of the Manager', () => {
    const manager = new Manager('JJ', '12345');

    expect(manager.getId()).toEqual('12345');
});

it('should return the email of the Manager', () => {
    const manager = new Manager('JJ', '12345', 'email@email.com');

    expect(manager.getEmail()).toEqual('email@email.com');
});

it('should return `Manager`', () => {
    const manager = new Manager('JJ', '1', 'email', '5');

    expect(manager.getRole()).toEqual('Manager');
})


