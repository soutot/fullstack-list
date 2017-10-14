import React from 'react';

const AuthenticateUser = (login, password) => {
  return new Promise((resolve, reject) => {
    if (login === 'Tiago' && password === 'teste'){
      resolve({ token: '1' })
      return;
    }
    reject('Login failed');
  });
}

export default AuthenticateUser;
