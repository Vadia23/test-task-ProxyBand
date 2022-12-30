import {  Switch, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage/MainPage';
import PostsPage from './components/pages/PostsPage/PostsPage';

import './App.scss';

function App() {

  return (
    <div className="app">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/posts" component={PostsPage} />
        </Switch>
    </div>
  )
}

export default App;
