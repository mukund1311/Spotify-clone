import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
// import BrowserRouter from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { DataLayer } from "./DataLayer";

// const root = ReactDOM.createRoot(document.getElementById('root'));
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
    <DataLayer initialState reducer>
      <App />
    </DataLayer>
      </StateProvider>
  </React.StrictMode>
);


serviceWorker.unregister();
  
   
    

     
   