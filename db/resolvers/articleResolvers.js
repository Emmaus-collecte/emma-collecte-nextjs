const Article = require('../models/articleModel')

const articleResolvers = {
    Query: {
        // articles
        getArticles: async () => {
            try {
                return await Article.find({})
            } catch (err) {
                console.log(err)
            }
        },
        getArticle: async (_, { id }) => {
            const article = await Article.findById(id)

            if (!article) {
                throw new Error('Article not found')
            }

            return article
        },
    },

    Mutation: {
        // articles
        newArticle: async (_, { input }) => {
            try {
                const article = new Article(input)

                return await article.save()
            } catch (err) {
                console.log(err)
            }
        },
        updateArticle: async (_, { id, input }) => {
            let article = await Article.findById(id)

            if (!article) {
                throw new Error('Article not found')
            }

            article = await Article.findOneAndUpdate({ _id: id }, input, {
                new: true,
            })

            return article
        },
        deleteArticle: async (_, { id }) => {
            const article = await Article.findById(id)

            if (!article) {
                throw new Error('Article not found')
            }

            await Article.findOneAndDelete({ _id: id })

            return 'Article deleted'
        },
    },
}

module.exports = articleResolvers