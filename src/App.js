import React from 'react';
import logo from './logo.svg';
import ListItems from './ListItems';
import SetAlarm from './SetAlarm';
import ToDo from './ToDo';

import {BrowserRouter, Route, Link} from "react-router-dom";

class App extends React.Component{
  

  render(){
    return (
      <div className="App">
        <BrowserRouter>
            <Route path="/" exact component={ToDo}/>    
            <Route path="/setalarm" exact component={SetAlarm}/>
        </BrowserRouter>
        
      </div>
    );
  }
  }

export default App;
