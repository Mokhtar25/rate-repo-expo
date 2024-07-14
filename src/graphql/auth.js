import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation ($username: String!, $password: String!) {
    createUser(user: { username: "$username", password: "$password" }) {
      id
      username
    }
  }
`;

export const SIGN_IN = gql`
  mutation ($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const SIGN_OUT = gql`
  {
    me {
      id
      username
    }
  }
`;

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("blog-user-token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : null,
//     },
//   };
// });
// const httpLink = createHttpLink({
//   uri: "http://localhost:4000",
// });
//
// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: authLink.concat(httpLink),
// });
//
//
