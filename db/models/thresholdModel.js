import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const ThresholdsSchema = new Schema({
    threshold: {
        type: Number,
        required: true,
        trim: true,
    },
    createAt: {
        type: Date,
        defalut: Date.now(),
    },
})

ThresholdsSchema.index({ name: 'text' })

module.exports =
    mongoose.models.Threshold || mongoose.model('Threshold', ThresholdsSchema)
