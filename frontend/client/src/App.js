import React from 'react';
import {BrowserRouter , Route , Switch } from 'react-router-dom';
import './App.css';
import importedComponent from 'react-imported-component'
import loading from './loading';
import ResponsiveDrawer from './components/Drawer'

const Page = importedComponent(()=>import('./components/home/page'),{
  LoadingComponent : loading
})

const Editor = importedComponent(()=>import('./components/editor'),{
  LoadingComponent : loading
})

const Login = importedComponent(()=>import('./components/login/Log'),{
  LoadingComponent : loading
})

const Notes = importedComponent(()=>import('./components/home/notes'),{
  LoadingComponent : loading
})

function App() {
  return (
   <div className="App">
    <BrowserRouter>
    <ResponsiveDrawer />
      <Switch>
        <Route exact path="/" component={Page} />
        <Route path="/editor" component={Editor} />
        <Route path="/notes" component={Notes}   />
        <Route  path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
   </div>
  );
}

export default App;
