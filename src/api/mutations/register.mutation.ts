import { gql } from "@apollo/client";

export const RegistrationMutation = gql`
  mutation RegisterUser($input: UserRegistrationInput!) {
    register(input: $input) {
      id
      username
    }
  }
`;
