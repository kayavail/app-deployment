import React, {Component} from 'react'
import Home from './Home'
import Post from './Post'
import {Route, Switch} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

class App extends Component{
  render(){
    return (
      <div className="App">
        <header>
          <h1>ALABIAN SOLUTIONS</h1>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/post/:id" component={Post} />
        </Switch>
      </div>
    )
  }
}

export default App;
