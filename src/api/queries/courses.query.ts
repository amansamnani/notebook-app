import { gql } from "@apollo/client";

export const GetCourseQuery = gql`
  query GetCourses($id: String) {
    courses(id: $id) {
      id
      name
    }
  }
`;
