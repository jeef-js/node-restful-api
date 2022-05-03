const User = require('../models/User');

module.exports = {
    async store(req, res) { // Create a new user
        const { name, email, password_hash } = req.body;

        const user = await User.create({
            name,
            email,
            password_hash,
        });

        return res.json(user);
    },

    async index(req, res) { // List all users
        const users = await User.findAll();

        return res.json(users);
    },

    async show(req, res) { // Show a specific user
        const user = await User.findByPk(req.params.id);

        return res.json(user);
    },

    async update(req, res) { // Update a specific user
        const user = await User.findByPk(req.params.id);

        const { name, email, password_hash } = req.body;

        user.name = name;
        user.email = email;
        user.password_hash = password_hash;

        await user.save();

        return res.json(user);
    },

    async destroy(req, res) { // Delete a specific user
        const user = await User.findByPk(req.params.id);

        await user.destroy();

        return res.json({ message: 'User deleted' });
    },

    async login(req, res) { // Login a specific user
        const { email, password_hash } = req.body;
        if (!email || !password_hash) {
            return res.json({ message: 'Email and password are required' });
        }

        const user = await User.findOne({
            where: {
                email,
                password_hash,
            },
        });

        if (!user) {
            return res.json({ message: 'User not found' });
        }

        return res.json(user);
    },

    async verifyEmail(req, res) { // Verify a specific user email
        const user = await User.findByPk(req.params.id);

        if (!user) {
            return res.json({ message: 'User not found' });
        }

        user.verified = true;

        await user.save();

        return res.json(user);
    },
}
