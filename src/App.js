import React from 'react';
import './App.css';
import Todo from './components/Todo';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Task from './components/Task';


function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <Switch>
          <Route exact path='/' component={Todo} />
          <Route path='/:id' component={Task}/>
          </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
