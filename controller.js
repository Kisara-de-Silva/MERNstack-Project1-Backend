const users = [
    {
        id: 1,
        name: 'Perera',
    },
    {
        id: 2,
        name: 'Silva'
    }
];

const getUsers = (cb) => {      //cb = Call Back Function 
    cb(users);
};

const getUserById = (id, cb) => {
    const user = users.find(user => user.id == id);
    cb(user);
}

exports.getUsers = getUsers;
