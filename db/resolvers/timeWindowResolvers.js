const TimeWindow = require('../models/timeWindowModel')

const timeWindowResolvers = {
  Query: {
    // timeWindows
    getTimeWindows: async () => {
      try {
        return await TimeWindow.find({})
      } catch (err) {
        console.log(err)
      }
    },
    getTimeWindow: async (_, { id }) => {
      const timeWindow = await TimeWindow.findById(id)

      if (!timeWindow) {
        throw new Error('TimeWindow not found')
      }

      return timeWindow
    },
  },

  Mutation: {
    // timeWindows
    newTimeWindow: async (_, { input }) => {
      try {
        const timeWindow = new TimeWindow(input)

        return await timeWindow.save()
      } catch (err) {
        console.log(err)
      }
    },
    updateTimeWindow: async (_, { id, input }) => {
      let timeWindow = await TimeWindow.findById(id)

      if (!timeWindow) {
        throw new Error('TimeWindow not found')
      }

      timeWindow = await TimeWindow.findOneAndUpdate({ _id: id }, input, {
        new: true,
      })

      return timeWindow
    },
    deleteTimeWindow: async (_, { id }) => {
      const timeWindow = await TimeWindow.findById(id)

      if (!timeWindow) {
        throw new Error('TimeWindow not found')
      }

      await TimeWindow.findOneAndDelete({ _id: id })

      return 'TimeWindow deleted'
    },
  },
}

module.exports = timeWindowResolvers
