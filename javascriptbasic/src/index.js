import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter,
    Switch,
    Route,
    // Link,
    // useParams,
    // useRouteMatch
  } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
          <Switch>
        <Route exact path="/" component={App} />
        <Route path="/variable/" component={App} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>, document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
