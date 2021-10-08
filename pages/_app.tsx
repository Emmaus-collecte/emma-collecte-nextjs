import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../component/Layout/Layout";
import { useApollo } from '../apollo/client'
import {ApolloProvider} from "@apollo/client";


function MyApp({ Component, pageProps }: AppProps) {
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <ApolloProvider client={apolloClient}>
            <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
  )
}
export default MyApp
