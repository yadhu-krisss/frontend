import React from 'react'
import  ReactDOM  from 'react-dom'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LoginForm from './Components/Login'
import Signup from './Components/Signup'
import Course from './Components/Courses'
import Certification from './Components/Certification'
import Sessions from './Components/Sessions'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Blogs from './Components/Blogs'
import profile from './Components/Profile'
import Navbar from './Components/Homepage'
import Materials from './Components/Materials'
import Logout from './Components/Logout'
import SignupForm from './Components/Signup'
import Login from './Components/Login'
function App(){

ReactDOM.render(
  <Router>
    <Routes>
    <Route exact path='/'Component={Navbar}/>
      <Route exact path='/login'Component={Login}/>
      <Route exact path='/signup'Component={SignupForm}/>
      <Route exact path ='/sessions'Component={Sessions}/>
      <Route exact path='/course'Component={Course}/>
      <Route exact path='/certification'Component={Certification}/>
      <Route exact path='/blogs'Component={Blogs}/>
      <Route exact path='/profile'Component={profile}/>
      <Route exact path ='/materials'Component={Materials}/>
      <Route exact path ='/logout'Component={Logout}/>

    </Routes>
  </Router>,
  document.getElementById('root')

);
}
export default App;