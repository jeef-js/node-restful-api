const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { name, email, password_hash } = req.body;

        const user = await User.create({
            name,
            email,
            password_hash,
        });

        return res.json(user);
    },

    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async show(req, res) {
        const user = await User.findByPk(req.params.id);

        return res.json(user);
    },

    async update(req, res) {
        const user = await User.findByPk(req.params.id);

        const { name, email, password_hash } = req.body;

        user.name = name;
        user.email = email;
        user.password_hash = password_hash;

        await user.save();

        return res.json(user);
    },

    async destroy(req, res) {
        const user = await User.findByPk(req.params.id);

        await user.destroy();

        return res.json({ message: 'User deleted' });
    },
}
