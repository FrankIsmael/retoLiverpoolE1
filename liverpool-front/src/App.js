import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import AddArticle from './components/AddArticle';
import Navbar from './components/Navbar';
import ArticleList from './components/ArticleList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={AddArticle} />
          <Route exact path="/articulos" component={ArticleList} />
        </Switch>
      </div>
    );
  }
}

export default App;
//<AddArticle/>