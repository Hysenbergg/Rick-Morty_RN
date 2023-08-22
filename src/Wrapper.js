import React from 'react';
import Provider from './context/Provider';
import Router from './Router';

const Wrapper = () => {
  return(
    <Provider>
        <Router />
    </Provider>
  )
}

export default Wrapper