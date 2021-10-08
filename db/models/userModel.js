import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const UsersSchema = new Schema({
    firstName : {
        type: String,
        required: true,
        trim: true,
    },
    lastName : {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phone : {
        type: String,
        required: true,
        trim: true,
    },
    password : {
        type: String,
        required: true,
        trim: true,
    },
    loyalty : {
        type: Number,
        required: true,
        trim: true,
    },
    role : {
        type: String,
        required: true,
        trim: true,
    },
    createAt: {
        type: Date,
        defalut: Date.now(),
    },
})

UsersSchema.index({ name: 'text' })

module.exports =
    mongoose.models.User || mongoose.model('User', UsersSchema)
