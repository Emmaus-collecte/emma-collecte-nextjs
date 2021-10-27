import { makeExecutableSchema } from 'apollo-server-micro'
import timeWindowTypeDefs from '../typeDefs/timeWindowTypeDef'
import timeWindowResolvers from '../resolvers/timeWindowResolvers'

let timeWindowSchema = makeExecutableSchema({
  typeDefs: timeWindowTypeDefs,
  resolvers: timeWindowResolvers,
})

module.exports = timeWindowSchema
