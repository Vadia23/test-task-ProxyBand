import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import store from './store/store';

import './index.scss';
import AlbumsPage from './components/pages/AlbumsPage/AlbumsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Provider store={store}>
            <App />
            <Route path="/albums" component={AlbumsPage}/>
        </Provider>
      </Switch>
    </BrowserRouter>    
  </React.StrictMode>
);
