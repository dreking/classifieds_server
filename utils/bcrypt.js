const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
    const hashed = bcrypt.hashSync(password, 12);
    return hashed;
};

const comparePassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
};

module.exports = { hashPassword, comparePassword };
