import React from 'react';
import { graphql, Environment, fetchQuery } from 'relay-runtime';

import environment from '../environment';

const FetchList = user => {
  return fetchQuery(
    environment,
    graphql`
      query FetchListQuery {
        users {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `
  ).then(data => {
    return data.users.edges;
  });
};

export default FetchList;
