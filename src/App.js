import React from 'react'
import "./App.css"
import Header from "./components/common/heading/Header"
import Home from './components/common/home/hero/Home'
import About from './components/about/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from "react-router-dom";
 



const App = () => {
  return (
    <>

    <Router>
    <Header/>

    <Switch>
      <Route path='/'   exact component={Home} />      
      <Route path='/about'   exact component={About} />      
      </Switch>
  
    </Router>
    </>
  )
}

export default App

