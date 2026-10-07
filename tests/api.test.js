const { fetchUser} = require('../src/api');

describe('API functions', () => {
    test('fetchUser return an object', async () => {
        return fetchUser(1).then(user => {
            expect(user.name).toBe('Ivan');

        });
    });
    test('fetchUser return an error', async () => {
        return fetchUser(2).catch(error => {
            expect(error.message).toBe('User not found');
        });
    });
});
