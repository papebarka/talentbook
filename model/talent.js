const mongoose = require('mongoose');

const talentSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: String,
    profile: {
        type: String,
        required: true
    },
    skills: Array
});

const Talent = mongoose.model('Talent', talentSchema);

module.exports = Talent;