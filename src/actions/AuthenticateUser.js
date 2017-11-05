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

const AuthenticateUser = (login, password) => {
  return fetchQuery(
    environment,
    graphql`
      query AuthenticateUserQuery($name: String) {
        users(search: $name) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `,
    { name: login }
  ).then(data => {
    return data.users.edges;
  });
};

export default AuthenticateUser;
