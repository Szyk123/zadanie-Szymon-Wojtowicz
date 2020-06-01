import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Comments from './views/Comments';
import Users from './views/Users';
import './App.css';


function App() {
  return (
    
    <div>
       <BrowserRouter>
        
          <Switch>
            
            <Route path="/" component={Home}/>
            <Route path={"/posts" } component={Home}/>
            <Route path="/Users" component={Home}/>

          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
