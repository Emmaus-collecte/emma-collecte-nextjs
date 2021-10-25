import React from 'react'
import { initializeApollo } from '../../../../apollo/client'
import { gql } from '@apollo/client'
import { ArticleModel } from '../../../../models/article.model'
import BackArrowIcon from '../../../../public/icons/backArrow.svg'
import SideBarArticleDetails from '../../../../component/Articles/SideBarArticleDetails'
import Toaster from '../../../../public/illustrations/Toaster02.png'
import Image from 'next/image'
export async function getServerSideProps(context: any) {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: gql`
      query getOneArticle($id: ID!) {
        getArticle(id: $id) {
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
    variables: {
      id: context.query.id,
    },
  })

  return {
    props: {
      article: data.getArticle,
    },
  }
}

interface ArticleDetailsProps {
  article: ArticleModel
}
const ArticleDetails = ({ article }: ArticleDetailsProps) => {
  return (
    <div className="grid grid-cols-4 h-full">
      <div className="col-start-1 col-end-4">
        {/*Back Button*/}
        <button type="button" className="flex items-center">
          <div className="bg-ternary w-20 h-8 rounded-lg text-white flex justify-center items-center mr-4">
            <BackArrowIcon className="fill-current" />
          </div>
          <p className="font-bold">Retour aux produits</p>
        </button>
        {/*Content*/}
        <div>
          <div className="bg-light-secondary rounded-lg p-20 w-3/4 my-6">
            <Image src={Toaster} alt="toaster" />
          </div>
          <div className="flex items-center">
            <div className="bg-secondary w-4/5 h-1 mr-6" />
            <div className="bg-primary rounded-full h-4 w-4" />
          </div>
          <div className="bg-light-secondary rounded-lg p-5 w-3/4 my-6 font-light">
            {article.description}
          </div>
        </div>
      </div>
      {/*SideBar*/}
      <div className="bg-primary col-start-4 -my-16 -mr-16 rounded-l-3xl p-6 flex flex-col">
        <SideBarArticleDetails article={article} />
      </div>
    </div>
  )
}

export default ArticleDetails
