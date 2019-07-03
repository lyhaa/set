import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './router/Home/Home'
import Bookrack from './router/Bookrack/Bookrack';
import Footer from './components/Footer/Footer';
import My from './router/My/My';
import Details from './router/Details/Details';
import {HashRouter as Router,Route,Switch} from "react-router-dom"; 
import { from } from 'rxjs';
import store from './store/index';
// console.log(this)

ReactDOM.render(
               <Router store={store}>
                   <Switch>
                       <Route exact path="/" component={Home} tab={"ture"}></Route>
                       <Route exact path ="/Bookrack" component={Bookrack} tab={"ture"}></Route>
                       <Route exact path ="/My" component={My} tab={"ture"}></Route>
                       <Route exact path ="/Details" component={Details} tab={"false"}></Route>
                   </Switch>
                    < Footer></Footer>
               </Router>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
