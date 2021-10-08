import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const CollectionsSchema = new Schema({
    date: {
        type: Date,
        required: true,
        trim: true,
    },
    startHour: {
        type: String,
        required: true,
        trim: true,
    },
    endHour: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    isDone: {
        type: Boolean,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    articles: [{
        type: mongoose.ObjectId,
        ref: 'Article',
        trim: true,
    }],
    user: {
        type: mongoose.ObjectId,
        ref: 'User',
        trim: true,
    },
    driver: {
        type: mongoose.ObjectId,
        ref: 'User',
        trim: true,
    },
    createAt: {
        type: Date,
        defalut: Date.now(),
    },
})

CollectionsSchema.index({ name: 'text' })

module.exports =
    mongoose.models.Collection || mongoose.model('Collection', CollectionsSchema)
