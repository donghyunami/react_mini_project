import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/js/all';
import App from './app';

//App 실행
ReactDOM.render(
<StrictMode>
    <App/>
</StrictMode>,
document.getElementById('root')
);
