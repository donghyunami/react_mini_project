import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import '@fortawesome/fontawesome-free/js/all';
import './index.css';

//App 실행
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
