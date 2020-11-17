import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Component from './Component';
import FormEs2 from './forms/FormEs2';
import FormEs1  from './forms/FormEs1';
import AppNuova from './AppNuova';
import AppL from './AppL';
import AppH from './AppH';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Component /> */}
    {/* <FormEs1 /> */}
    {/* <FormEs2 /> */}
    {/* <AppNuova /> */}
    {/* <AppL /> */}
    <AppH />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
