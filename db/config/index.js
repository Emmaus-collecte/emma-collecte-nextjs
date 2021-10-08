const mongoose = require('mongoose')

// const MongoDb = process.env.MONGODB_URI
const MongoDb = 'mongodb://mongo:27017/emma-collecte'

const connectDb = async () => {
    try {
        await mongoose.connect(MongoDb, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('db success connect')
    } catch (err) {
        console.log('error connecting to database')
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDb