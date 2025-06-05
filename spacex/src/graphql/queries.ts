import { gql } from "@apollo/client";

export const GET_ALL_LAUNCHES = gql`
  query GetAllLaunches {
    launches {
      mission_name
      launch_date_utc
      rocket {
        rocket_name
      }
    }
  }
`;
