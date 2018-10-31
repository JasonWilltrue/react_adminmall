import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
import Home             from 'page/home/index.jsx';


class App extends React.Component{
  render(){
      return (
          <h1>hello word</h1>
        //   <Router>
        //       <Switch>
        //           {/* <Route path="/login" component={Login}/> */}
        //           <Route path="/" component={Home}/>
        //       </Switch>
        //   </Router>
      )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);