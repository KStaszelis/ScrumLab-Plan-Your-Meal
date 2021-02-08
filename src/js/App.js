import React from "react";

import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import MainPage from "./MainPage";
import MainAppView from "./MainAppView";
import NotificationWidget from "./NotificationWidget";


const App = () => {


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/app" component={MainAppView} />
            </Switch>
            </BrowserRouter>
        //<NotificationWidget/>
    );

};

export default App;
