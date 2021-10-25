import { gql } from '@apollo/client'
import { initializeApollo } from '../../../apollo/client'
import ArticleList from '../../../component/Articles/ArticleList'
import ShoppingIcon from '../../../public/icons/shopping.svg'
import useStore from '../../../lib/store/useStore'
import { ArticleModel } from '../../../models/article.model'
import { useState } from 'react'
import Cart from '../../../component/Articles/Cart/Cart'

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: gql`
      query getArticles {
        getArticles {
          id
          price
          name
          description
          isCollection
          options {
            name
            quantity
          }
        }
      }
    `,
  })

  return {
    props: {
      articleList: data.getArticles,
    },
  }
}

interface ArticlesProps {
  articleList: Array<ArticleModel>
}

const Collection = ({ articleList }: ArticlesProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="col-start-1">
          <p className="text-2xl">Liste des articles collectables</p>
          <div className="bg-secondary w-4/5 h-1" />
        </div>
        <button
          type="button"
          className="col-start-2 flex justify-end"
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          <div className="bg-ternary text-white w-36 flex p-4 rounded-3xl justify-around ">
            5/30
            <ShoppingIcon className="fill-current" />
          </div>
        </button>
      </div>
      <ArticleList articleList={articleList} />
      <Cart isCartOpen={isCartOpen} closeCart={() => setIsCartOpen(false)} />
    </>
  )
}

export default Collection
