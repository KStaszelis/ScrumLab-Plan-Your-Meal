import React, {useState} from "react";
import Popup from "reactjs-popup";
import AddNewRecipe from "./AddNewRecipe";
import AddPlan from "./AddPlan";

class WidgetAddRecipe extends React.Component {

    render() {
        return (
            <div className="widget-container">
                <Popup trigger={<button className="add-recipe"></button>} className="adding-popup">
                    <div className="adding-recipe-form">
                        <AddNewRecipe/>
                    </div>
                </Popup>
                <Popup trigger={<button className="add-plan"></button>} className="adding-popup">
                    <div className="adding-plan-form">
                        <AddPlan/>
                    </div>
                </Popup>
            </div>
        )
    };
}

export default WidgetAddRecipe;
