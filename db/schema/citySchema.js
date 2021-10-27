import { makeExecutableSchema } from 'apollo-server-micro'
import cityTypeDefs from '../typeDefs/cityTypeDef'
import cityResolvers from '../resolvers/cityResolvers'

let citySchema = makeExecutableSchema({
  typeDefs: cityTypeDefs,
  resolvers: cityResolvers,
})

module.exports = citySchema
