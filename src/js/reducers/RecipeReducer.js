const initialState = {
    recipe: null
};

const RecipeReducer = (state= initialState, action) => {
    switch (action.type) {
        case "EDIT_RECIPE" :
            return {
            ...state,
                recipe: action.payload
    }
        default:
        return {
            ...state
        };
    }
};

export default RecipeReducer;
