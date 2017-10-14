import React from 'react';

const Navigate = (navigate, route, props = {}) => {
  navigate(route, ...props)
}

export default Navigate;
