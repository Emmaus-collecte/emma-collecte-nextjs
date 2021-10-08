import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const RolesSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    createAt: {
        type: Date,
        defalut: Date.now(),
    },
})

RolesSchema.index({ name: 'text' })

module.exports =
    mongoose.models.Role || mongoose.model('Role', RolesSchema)
