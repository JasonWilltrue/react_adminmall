import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './app.css';



class App extends Component{
  render(){
      return (
         <h1 className="text">hello</h1>
      )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);