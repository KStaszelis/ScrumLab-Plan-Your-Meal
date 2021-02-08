const editRecipe = ({recipe}) => {
    return {
        type: "EDIT_RECIPE",
        payload: recipe
    }
};

export default editRecipe;
