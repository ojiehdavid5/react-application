import React from 'react'
import "./App.css"
import Header from "./components/common/heading/Header"
import Home from './components/common/home/hero/Home'
import About from './components/about/About'
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import price from "./components/pricing/price"
import Blog from  "./components/blog/Blog"

import Contact from "./components/contact/Contact"


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
      <Route path='/courses'   exact component={CourseHome} />      
      <Route path='/team'   exact component={Team} />      
      <Route path='/pricing'   exact component={price} />      
      <Route path='/journal'   exact component={Blog} />      
      <Route path='/contact'   exact component={Contact} />      
      </Switch>
  
    </Router>
    </>
  )
}

export default App



