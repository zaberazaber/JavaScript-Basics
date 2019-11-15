import React from 'react';
import {
    // BrowserRouter,
    // Switch,
    Route,
    // Link,
    useParams,
    // useRouteMatch
} from "react-router-dom";




function Variable() {
    let { path, url } = useParams();
    console.log('path is --->', path, 'url is --->', url)
    return <div>
        <Route path="/variable/variable-owerview">
            <VariableOverview />
        </Route>
        <Route path="/variable/stringandnumbers">
            <StringAndNumber />
        </Route>
        <Route path="/variable/array">
            <Array />
        </Route>
        <Route path="/variable/boolean">
            <Boolean />
        </Route>
        <Route path="/variable/undefinedandnull">
            <UndefinedAndNull/>
        </Route>
        <Route path="/variable/object">
            <ObjectComponent />
        </Route>
        <Route path="/variable/object">
            <Playground />
        </Route>
    </div>
}

function VariableOverview() {
    return <h1>Variable overview</h1>
}

function StringAndNumber() {
    return <h1>this is string and number component</h1>
}

function Array() {
    return <h1>this ia an array component</h1>
}

function Boolean() {
    return <h1>Boolean overview</h1>
}

function UndefinedAndNull() {
    return <h1>Undefined and null component</h1>
}

function ObjectComponent() {
    return <h1>Object</h1>
}

function Playground() {
    return <h1>Playground</h1>
}



export default Variable