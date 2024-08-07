import { ApolloClient, InMemoryCache } from "@apollo/client";
import Constants from "expo-constants";
import { createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";

// http://100.127.3.78:5001/api/repositories

const URI = `http://${Constants.expoGoConfig.debuggerHost.split(":").shift()}:4000`;
console.log(
  `http://${Constants.expoGoConfig.debuggerHost.split(":").shift()}:4000`,
);
// const URI = Constants.expoConfig.extra.APOLLO_URI;

const httpLink = createHttpLink({
  uri: URI,
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      },
    },
  },
});
const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
      };
    }
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: cache,
  });
};

export default createApolloClient;
