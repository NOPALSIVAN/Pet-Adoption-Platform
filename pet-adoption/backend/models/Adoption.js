const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdoptionSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    pet: { type: String, required: true },
    reason: { type: String, required: true }
});

module.exports = mongoose.model('Adoption', AdoptionSchema);
