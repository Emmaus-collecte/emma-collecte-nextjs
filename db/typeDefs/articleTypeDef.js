import { gql } from 'apollo-server-micro'

const articleTypeDefs = gql`
  # Articles
  
  type Options {
    name: String
    quantity: Int
  }
  
  
  type Article {
    id: ID
    name: String
    price: Float
    description: String
    isCollection : Boolean
    options : [Options]
  }

  input OptionsInput {
    name: String
    quantity: Int
  }

  input ArticleInput {
    name: String!
    price: Float!
    description: String
    isCollection : Boolean!
    options : [OptionsInput!]!

  }

  type Query {
    getArticles: [Article]
    getArticle(id: ID!): Article
  }

  type Mutation {
    #Articles
    newArticle(input: ArticleInput): Article
    updateArticle(id: ID!, input: ArticleInput): Article
    deleteArticle(id: ID!): String
  }
`

module.exports = articleTypeDefs
