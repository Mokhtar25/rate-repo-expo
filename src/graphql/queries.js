import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          ownerAvatarUrl
          ownerName
          openIssuesCount
          description
          language
          reviewCount
          ratingAverage
          forksCount
          stargazersCount
        }
      }
    }
  }
`;
