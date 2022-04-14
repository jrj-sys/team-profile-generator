const Engineer = require('../lib/Engineer');

it('should create an Engineer object with name, id, and github', () => {
    const engineer = new Engineer('JJ', '12345', 'email@email.com', 'github@github');

    expect(engineer.name).toEqual('JJ');
    expect(engineer.id).toEqual('12345');
    expect(engineer.email).toEqual('email@email.com');
});

it('should return the name of the Engineer', () => {
    const engineer = new Engineer('JJ', '12345', 'email@email.com', 'github@github');

    expect(engineer.getName()).toEqual('JJ');
});

it('should return the ID of the Engineer', () => {
    const engineer = new Engineer('JJ', '12345', 'email@email.com', 'github@github');

    expect(engineer.getId()).toEqual('12345');
});

it('should return the email of the Engineer', () => {
    const engineer = new Engineer('JJ', '12345', 'email@email.com', 'github@github');

    expect(engineer.getEmail()).toEqual('email@email.com');
});

it('should return `Engineer`', () => {
    const engineer = new Engineer('JJ', '12345', 'email@email.com', 'github@github');

    expect(engineer.getRole()).toEqual('Engineer');
});

it('should return the GitHub username of the Engineer', () => {
    const engineer = new Engineer('JJ', '12345', 'email@email.com', 'github@github');

    expect(engineer.getGithub()).toEqual('github@github');
})
