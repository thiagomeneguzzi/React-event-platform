import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl6u4slbq20wp01ume0zd7err/master',
  cache: new InMemoryCache()
})