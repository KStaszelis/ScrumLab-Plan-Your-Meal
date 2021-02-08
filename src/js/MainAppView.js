import React from "react";
import HeaderApp from "./HeaderApp";
import LeftPanel from "./LeftPanel";
import WidgetAddRecipe from "./WidgetAddRecipe";
import {
    Route,
    Switch,
} from 'react-router-dom';
import {useRouteMatch} from "react-router";
import Dashboard_firstEntry from "./Dashboard_firstEntry";
import AddNewRecipe from "./AddNewRecipe";
import Plan from "./Plan";
import AddPlan from "./AddPlan";
import "../scss/components/_addPlan.scss";
import RecipesView from "./RecipesView";
import NotificationWidget from "./NotificationWidget";
import PlanScreen from "./PlansScreen";

const MainAppView = () => {
    let match = useRouteMatch();

    return (
        <div>
                <HeaderApp/>
                <LeftPanel/>
                <div className="panel-padding">
                    <Switch>
                        <Route path={`${match.path}/recipes`}>
                            <AddNewRecipe/>
                            <RecipesView/>
                        </Route>
                        <Route path={`${match.path}/plan`}>
                            <AddPlan/>
                            <Plan/>
                            <PlanScreen/>
                        </Route>
                        <Route path={`${match.path}/`}>
                            <Dashboard_firstEntry/>
                            <div className="widget-group">
                                <WidgetAddRecipe/>
                                <NotificationWidget/>
                                <Plan/>
                            </div>
                        </Route>
                    </Switch>
                </div>
        </div>
    );
};

export default MainAppView;
