import React from 'react';
import { css, Global } from "@emotion/react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store/configureStore'
const container = document.getElementById('root');
const root = createRoot(container);

const GlobalStyle = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background: #e9ecef;
  }
`;

root.render(
  <React.StrictMode>
      <Global styles={GlobalStyle} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
