import { gql } from '@apollo/client';
const GET_USER = gql`
query {
    user(id: 2) {
      name
      avatar
    }
  }
`;

export default GET_USER