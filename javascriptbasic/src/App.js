import React from 'react';
import './App.css';
import Navigation from './navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Variable from './variable';
import {
  // BrowserRouter,
  // Switch,
  // Link,
   useParams,
  Route,
  useRouteMatch
} from "react-router-dom";


function App(props) {
  let { id } = useParams(); 
  console.log('path is --->', id  )
  const heading = "JAVASCRIPT BASICS";

  return  <React.Fragment>
    <div>
  <Navigation />
  <div>
    <h1>{id = "/variable/" ? heading : null}</h1>
    <Route  path="/variable/">
      <Variable />
    </Route>
    </div>
    </div>
  </React.Fragment>
  
}

export default App ;
