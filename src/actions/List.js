import React from 'react';
import {
  graphql,
  Environment,
  Network,
  RecordSource,
  Store,
  fetchQuery,
  commitMutation,
  commitLocalUpdate
} from 'relay-runtime';

import environment from '../environment';

const List = user => {
  return fetchQuery(
    environment,
    graphql`
      query ListQuery {
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
    console.log('data.users.edges', data.users.edges);
    return data.users.edges;
  });
};

export default List;
