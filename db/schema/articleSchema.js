import {makeExecutableSchema} from "apollo-server-micro";
import articleTypeDefs from '../typeDefs/articleTypeDef'
import articleResolvers from "../resolvers/articleResolvers";

let articleSchema = makeExecutableSchema({
    typeDefs: articleTypeDefs,
    resolvers: articleResolvers
})

module.exports = articleSchema