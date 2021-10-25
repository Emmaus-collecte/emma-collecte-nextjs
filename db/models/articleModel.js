import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const ArticlesSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    isCollection: {
        type: Boolean,
        required: true,
    },
    options: [{
        name: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true
        },
    }],
    createAt: {
        type: Date,
        defalut: Date.now(),
    },
})

ArticlesSchema.index({ name: 'text' })

module.exports =
    mongoose.models.Article || mongoose.model('Article', ArticlesSchema)
