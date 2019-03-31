import React, {Fragment} from 'react';
import {render} from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import {createGlobalStyle} from 'styled-components/macro';

import Router from './Components/Router';

const GlobalStyle = createGlobalStyle`
 body {
  font-family: 'helvetica';
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

render(
  <Fragment>
    <GlobalStyle />
    <Router />
  </Fragment>,
  document.getElementById('root')
);

serviceWorker.unregister();
