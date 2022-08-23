import { gql } from "@apollo/client";

export const SIGN_IN = gql`
    mutation SignIn($credentials: AuthenticateInput) {
        authenticate(credentials: $credentials) {
            accessToken
        }
  }
`;

export const CREATE_REVIEW = gql`
    mutation Mutation($review: CreateReviewInput) {
        createReview(review: $review) {
            repositoryId
        }
    }
`;