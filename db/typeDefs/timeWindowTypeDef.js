import { gql } from 'apollo-server-micro'

const timeWindowTypeDefs = gql`
  # TimeWindow

  type TimeWindow {
    id: ID
    startHour: String
    endHour: String
  }

  input TimeWindowInput {
    startHour: String!
    endHour: String!
  }

  type Query {
    getTimeWindows: [TimeWindow]
    getTimeWindow(id: ID!): TimeWindow
  }

  type Mutation {
    #TimeWindows
    newTimeWindow(input: TimeWindowInput): TimeWindow
    updateTimeWindow(id: ID!, input: TimeWindowInput): TimeWindow
    deleteTimeWindow(id: ID!): String
  }
`

module.exports = timeWindowTypeDefs
