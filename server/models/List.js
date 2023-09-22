const mongoose =  require('mongoose')

const Schema = mongoose.Schema

const listSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    response: {
        type: String,
        default: 'Pending',
        enum: ["Yes", "No", "Pending"],
        required: true
    },
    plusOne: {
        type: Boolean,
        required: true
    },
    plusOneResponse: {
        type: String,
        default: 'Pending',
        enum: ["Yes", "No", "Pending"],
        required: true
    }
}, { timestamps: false })

module.exports = mongoose.model('list', listSchema)