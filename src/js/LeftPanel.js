import React from "react";
import {NavLink} from "react-router-dom";

const LeftPanel = () => {
    return (
        <div className="left-panel-component">
            <ul className="left-panel-menu">
                <li><NavLink to="/app" activeClassName="active-link" exact><span>Pulpit</span><img src="/images/next.svg" alt="next"/></NavLink></li>
                <li><NavLink to="/app/recipes" activeClassName="active-link"><span>Przepisy</span><img src="/images/next.svg" alt="next"/></NavLink></li>
                <li><NavLink to="/app/plan" activeClassName="active-link"><span>Plany</span><img src="/images/next.svg" alt="next"/></NavLink></li>
            </ul>
        </div>
    );
};

export default LeftPanel;
