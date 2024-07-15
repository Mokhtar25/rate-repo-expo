import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query ($first: Int, $after: String) {
    repositories(first: $first, after: $after) {
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
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
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
