import RecipeReducer from "./RecipeReducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
        recipeStore: RecipeReducer
});

export default allReducers;
