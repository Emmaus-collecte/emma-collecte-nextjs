import { gql } from 'apollo-server-micro'

const cityTypeDefs = gql`
  # Cities

  type City {
    id: ID
    name: String
    cp: Int
  }

  input CityInput {
    name: String!
    cp: Int!
  }

  type Query {
    getCities: [City]
    getCity(id: ID!): City
  }

  type Mutation {
    #Citys
    newCity(input: CityInput): City
    updateCity(id: ID!, input: CityInput): City
    deleteCity(id: ID!): String
  }
`

module.exports = cityTypeDefs
