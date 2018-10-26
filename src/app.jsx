import React            from 'react';
import ReactDOM         from 'react-dom';
import './index.css';

export default class App extends React.Component{
    render() {
        return (
          <div className="shopping-list">
            <h1>Shopping List for {this.props.name}</h1>
            <ul>
              <li className="text">Instagram</li>
              <li>WhatsApp</li>
              <li>Oculus</li>
            </ul>
          </div>
        );
      }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);