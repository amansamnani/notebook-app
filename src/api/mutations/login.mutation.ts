import { gql } from "@apollo/client";

export const LoginMutation = gql`
  mutation LoginUser($input: UserLoginInput!) {
    login(input: $input) {
      id
      username
      role
    }
  }
`;
