import { ApolloClient, InMemoryCache } from "@apollo/client";

// http://100.127.3.78:5001/api/repositories
const createApolloClient = () => {
  return new ApolloClient({
    uri: "http://100.127.3.78:4000/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
