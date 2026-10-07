function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({
                    id:   1,
                    name: 'Ivan'
                });
            } else {
                reject(new Error('User not found'));
            }
        }, 100);
    });
}

module.exports = { fetchUser };
