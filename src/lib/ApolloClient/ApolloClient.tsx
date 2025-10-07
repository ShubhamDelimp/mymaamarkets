import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


export const isServer = () => typeof window === "undefined";


const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_APOLLO_GRAPHQL_URL, // e.g., "https://yourapi.com/graphql"
  fetch,
});
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      // Authorization: `Bearer ${token}` // if needed
    },
  };
});


const createClient = () => {
  return new ApolloClient({
    ssrMode: isServer(),
    link: from([httpLink,authLink]),
    cache: new InMemoryCache(),
  });
};

export default createClient;
