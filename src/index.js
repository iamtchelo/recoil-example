import React from 'react';
import ReactDOM from 'react-dom';
import {RecoilRoot} from 'recoil';
import {App} from './App';

import './index.css';

const Main = () => (
  <RecoilRoot>
    <App />
  </RecoilRoot>
);

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
