const City = require('../models/cityModel')

const cityResolvers = {
  Query: {
    // cities
    getCities: async () => {
      try {
        return await City.find({})
      } catch (err) {
        console.log(err)
      }
    },
    getCity: async (_, { id }) => {
      const city = await City.findById(id)

      if (!city) {
        throw new Error('City not found')
      }

      return city
    },
  },

  Mutation: {
    // cities
    newCity: async (_, { input }) => {
      try {
        const city = new City(input)

        return await city.save()
      } catch (err) {
        console.log(err)
      }
    },
    updateCity: async (_, { id, input }) => {
      let city = await City.findById(id)

      if (!city) {
        throw new Error('City not found')
      }

      city = await City.findOneAndUpdate({ _id: id }, input, {
        new: true,
      })

      return city
    },
    deleteCity: async (_, { id }) => {
      const city = await City.findById(id)

      if (!city) {
        throw new Error('City not found')
      }

      await City.findOneAndDelete({ _id: id })

      return 'City deleted'
    },
  },
}

module.exports = cityResolvers
