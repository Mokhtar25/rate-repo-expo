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
          url
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

export const GET_REPO = gql`
  query ($id: ID!) {
    repository(id: $id) {
      fullName
      id
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      url
      ownerAvatarUrl
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
