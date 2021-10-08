import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const CitiesSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    cp: {
        type: Number,
        required: true,
        trim: true,
    },
    createAt: {
        type: Date,
        defalut: Date.now(),
    },
})

CitiesSchema.index({ name: 'text' })

module.exports =
    mongoose.models.City || mongoose.model('City', CitiesSchema)
