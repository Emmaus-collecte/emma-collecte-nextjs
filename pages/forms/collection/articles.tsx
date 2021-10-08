import { gql } from '@apollo/client'
import {initializeApollo} from "../../../apollo/client";
import ArticleList from "../../../component/Articles/ArticleList";
import ShoppingIcon from '../../../public/icons/shopping.svg'
import useStore from "../../../lib/store/useStore";

export async function getServerSideProps() {

    const apolloClient = initializeApollo()
    const {data} = await apolloClient.query(
        {
            query: gql`
        query getArticles {
          getArticles {
            id
            price
            name
            description
            drive
          }
          }
        `
        }
    );
    console.log(data)

    return {
        props: {
            articleList : data.getArticles
        }
    }
}

interface ArticlesProps {
    articleList: Array<{
        name: string,
        price: number,
        drive: boolean,
        description: string
    }>
}

const Articles = ({articleList} : ArticlesProps) => {

    const cart = useStore((state) => state.cart);
    console.log(cart);
    return (
        <>
            <div className="grid grid-cols-2">
                <div className="col-start-1">
                    <p className="text-2xl">Liste des articles collectables</p>
                    <div className="bg-secondary w-4/5 h-1"/>
                </div>
                <div className="col-start-2 flex justify-end">
                    <div className="bg-ternary text-white w-36 flex p-4 rounded-3xl justify-around ">
                        5/30
                        <ShoppingIcon className="fill-current"/>
                    </div>
                </div>
            </div>
            <ArticleList articleList={articleList}/>
        </>
    )
};

export default Articles;