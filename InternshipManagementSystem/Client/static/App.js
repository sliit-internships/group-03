import React, {Component} from "react";
import {BrowserRouter,Route} from 'react-router-dom';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PostDetails from './components/PostDetails';

import FormI1 from './components/FormI1';
import FormI1A from './components/FormI1A';
import FormI1B from './components/FormI1B';
import FormI3A from './components/FormI3A';
import FormI5 from './components/FormI5';
import FormI5A from './components/FormI5A';
import FormI7 from './components/FormI7';


export default class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <div className="Conatainer">
      <NavBar/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/add" exact component={CreatePost}></Route>
        <Route path="/edit/:id" exact component={EditPost}></Route>
        <Route path="/post/:id" exact component={PostDetails}></Route>

        <Route path="/FormI1" exact component={FormI1}></Route>
        <Route path="/FormI1A" exact component={FormI1A}></Route>
        <Route path="/FormI1B" exact component={FormI1B}></Route>
        <Route path="/FormI3A" exact component={FormI3A}></Route>
        <Route path="/FormI5" exact component={FormI5}></Route>
        <Route path="/FormI5A" exact component={FormI5A}></Route>
        <Route path="/FormI7" exact component={FormI7}></Route>

      </div>
      </BrowserRouter>
    )
  }
}