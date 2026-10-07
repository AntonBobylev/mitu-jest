const { fetchUser} = require('../src/api');

// describe('API functions', () => {
//     test('fetchUser return an object', async () => {
//         return fetchUser(1).then(user => {
//             expect(user.name).toBe('Ivan');
//
//         });
//     });
//     test('fetchUser return an error', async () => {
//         return fetchUser(2).catch(error => {
//             expect(error.message).toBe('User not found');
//         });
//     });
// });

describe('API functions with async + await', () => {
    test('fetchUser returns a user', async () => {
        const user = await fetchUser(1);
        expect(user.name).toBe('Ivan');
        expect(user.id).toBe(1);
    });
    test('fetchUser returns an error', async () => {
        await expect(fetchUser(2)).rejects.toThrow('User not found');
    });
});
