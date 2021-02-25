import React from "react";
import {Route, Switch} from "react-router";

import Lists from "./components/ListView/Lists";

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path='/listViews' component={Lists}/>
                <Route path='/entryView' exact component={()=> <h1>Sorry, but there was not enough time to complete this task(</h1>}/>
                <Route path='/' exact component={()=> <h1>Welcome to product list</h1>}/>

            </Switch>
        </div>
    )
}

export default Routes;
