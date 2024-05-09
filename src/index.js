import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import App1 from './App1';
import App2Lists from './App2.lists';
import App3 from './App3.UseState';
import Counter from './Counter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <App1/>
    <App2Lists/> */}
    <App3/>
    <Counter/>
  </React.StrictMode>
);


