import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import AddArticle from './components/AddArticle';
import Navbar from './components/Navbar';
import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={AddArticle} />
          <Route exact path="/articulos" component={ArticleList} />
          <Route exact path="/articulos/:id" component={ArticleDetails}/>
        </Switch>
      </div>
    );
  }
}

export default App;
//<AddArticle/>