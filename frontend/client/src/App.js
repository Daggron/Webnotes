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

function App() {
  return (
   <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Editor} />
      </Switch>
    </BrowserRouter>
   </React.Fragment>
  );
}

export default App;
