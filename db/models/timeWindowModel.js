import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const TimeWindowsSchema = new Schema({
    startHour : {
        type: String,
        required: true,
        trim: true,
    },
    endHour: {
        type: String,
        required: true,
        trim: true,
    },
    createAt: {
        type: Date,
        defalut: Date.now(),
    },
})

TimeWindowsSchema.index({ name: 'text' })

module.exports =
    mongoose.models.TimeWindow || mongoose.model('TimeWindow', TimeWindowsSchema)
