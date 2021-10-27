import { ApolloServer } from 'apollo-server-micro'
import connectDb from '../../db/config'
import { mergeSchemas } from 'graphql-tools'
import articleSchema from '../../db/schema/articleSchema'
import citySchema from '../../db/schema/citySchema'
import timeWindowSchema from '../../db/schema/timeWindowSchema'

connectDb()

export const gatewaySchema = mergeSchemas({
  schemas: [articleSchema, citySchema, timeWindowSchema],
})

export const config = {
  api: {
    bodyParser: false,
  },
}

const apolloServer = new ApolloServer({ schema: gatewaySchema })

const startServer = apolloServer.start()

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}
