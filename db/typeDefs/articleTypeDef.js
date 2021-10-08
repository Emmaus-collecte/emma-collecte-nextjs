import { gql } from 'apollo-server-micro'

const articleTypeDefs = gql`
  # Articles
  type Article {
    id: ID
    name: String
    price: Float
    description: String
    drive : Boolean
  }

  input ArticleInput {
    name: String!
    price: Float!
    description: String
    drive : Boolean!
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
