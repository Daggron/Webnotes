import React from 'react';
import {BrowserRouter , Route , Switch } from 'react-router-dom';
import './App.css';
import importedComponent from 'react-imported-component'
import loading from './loading';


const Page = importedComponent(()=>import('./page'),{
  LoadingComponent : loading
})

const Editor = importedComponent(()=>import('./components/editor'),{
  LoadingComponent : loading
})

const Login = importedComponent(()=>import('./components/login/Log'),{
  LoadingComponent : loading
})

function App() {
  return (
   <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Editor} />
        <Route  path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
   </div>
  );
}

export default App;
