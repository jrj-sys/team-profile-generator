const Intern = require('../lib/Intern');

it('should create an Intern object with name, id, and school', () => {
    const intern = new Intern('JJ', '12345', 'email@email.com', 'UT');

    expect(intern.name).toEqual('JJ');
    expect(intern.id).toEqual('12345');
    expect(intern.email).toEqual('email@email.com');
    expect(intern.school).toEqual('UT');
});

it('should return the name of the Intern', () => {
    const intern = new Intern('JJ', '12345', 'email@email.com', 'UT');

    expect(intern.getName()).toEqual('JJ');
});

it('should return the ID of the Intern', () => {
    const intern = new Intern('JJ', '12345', 'email@email.com', 'UT');

    expect(intern.getId()).toEqual('12345');
});

it('should return the email of the Intern', () => {
    const intern = new Intern('JJ', '12345', 'email@email.com', 'UT');

    expect(intern.getEmail()).toEqual('email@email.com');
});

it('should return `Intern`', () => {
    const intern = new Intern('JJ', '12345', 'email@email.com', 'UT');

    expect(intern.getRole()).toEqual('Intern');
});

it('should return the GitHub username of the Intern', () => {
    const intern = new Intern('JJ', '12345', 'email@email.com', 'UT');

    expect(intern.getSchool()).toEqual('UT');
})
