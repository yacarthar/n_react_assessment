import ReactDOM from 'react-dom';
import React, { useState } from 'react';

import Home from './components/Home/Home.js';
import Posts from './components/Posts/Posts.js';
import Profile from './components/Profile/Profile.js';
import Login from './components/Login/Login.js';
import UserContext from './components/Contexts/User.js';
import {
  BrowserRouter,
  Routes,
  Route, Link
} from "react-router-dom";


const App = () => {
  const [user, setUser] = useState("")
  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <div>
          {/* <select value={language}
            onChange={(evt) => {setLanguage(evt.target.value)}}>
            <option value="en">English</option>
            <option value="vi">Vietnamese</option>
          </select> */}
          <nav>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/posts">Post</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/login">Login</Link></li>
          </nav>
        </div>
        
        <Routes>
          <Route path="home" element={<Home/>}></Route>
          <Route path="posts" element={<Posts/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
          <Route path="login" element={<Login/>}></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}
ReactDOM.render(<App/>, document.getElementById('root'))