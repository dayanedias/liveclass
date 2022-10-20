import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl6qj62po335c01sz943b8nta/master',
  cache: new InMemoryCache(),
});