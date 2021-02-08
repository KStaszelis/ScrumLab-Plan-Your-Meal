import React, {useEffect, useState} from "react";
import {connect, useSelector} from "react-redux";

const AddNewRecipe =({recipe})=>{
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [steps, setSteps] = useState([]);
    const [step, setStep] = useState("");
    const [ingredient, setIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [stepEditIndex, setStepEditIndex] = useState(null);
    const [editValueStep, setEditValueStep] = useState("")
    const [ingredientEditIndex, setIngredientEditIndex] = useState(null);
    const [editValueIngredient, setEditValueIngredient] = useState("")
    const [recipeId, setRecipeId] = useState(null)

    const myRef = React.createRef();

    const editRecipe = useSelector((state)=> state.recipe);

    useEffect(()=> {
        if(recipe !=null) {
            setName(recipe.name)
            setRecipeId(recipe.id)
            setDescription(recipe.description)
            setIngredients(recipe.ingredients)
            setSteps(recipe.steps)
        }
    }, [recipe]);

    const saveRecipe= () => {
            const options = {
                method: recipeId == null ? 'POST' : 'PATCH',
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    description,
                    steps,
                    ingredients,
                    id : recipeId
        })};
                fetch(recipeId == null ? 'http://localhost:3002/recipes' : `http://localhost:3002/recipes/${recipeId}`, options)
                    .then(response => window.location.reload(false));
    };

    const removeStep =(id)=>{
        setSteps([...steps].filter((step)=>step !==id))
    }

    const removeIngredient =(id)=>{
        setIngredients([...ingredients].filter((ingredient)=>ingredient !==id))
    }

    const editStep =(step,index)=>{
        setStepEditIndex(index)
        setEditValueStep(step)
    }

    const confirmEditStep = () => {
       steps[stepEditIndex]= editValueStep;
        setStepEditIndex(null);
    }

    const editIngredient =(ingredient,index)=>{
        setIngredientEditIndex(index)
        setEditValueIngredient(ingredient)
    }

    const confirmEditIngredient = () => {
        ingredients[ingredientEditIndex]= editValueIngredient;
        setIngredientEditIndex(null);
    }

    return (
        <>
            <div className="box-recipe">
                <div className="header-recipe">
                    <h3>NOWY PRZEPIS</h3>
                    <button onClick={saveRecipe} type="submit" className="button-recipe-header">Zapisz i zamknij</button>
                </div>
                <hr className="hr-recipe"></hr>

                <div className="text-recipe">
                    <h2>Nazwa przepisu</h2>
                    <input value={name} onChange={e => setName(e.target.value)} className="input-recipe-title" type="text" />
                </div>
                <div className="text-recipe">
                    <h2>Opis przepisu</h2>
                    <input value={description} onChange={e => setDescription(e.target.value)} className="input-recipe-description" type="text" />
                </div>

                <div className="columns">
                    <div className="add-ingredient">
                    <p>Instrukcje</p>
                    <hr className="hr-recipe"></hr>

                        <div className="text-recipe">
                            <input className="input-recipe"
                                   onChange={e => setStep(e.target.value)} />
                            <button onClick={() => {setSteps([...steps, step]);
                            document.getElementsByClassName("input-recipe").item(0).value=""
                            }}
                                    className="add-instruction"></button>
                        </div>

                        <div className="scroll">

                            <ul className="list-recipe" >
                                {steps.map((step, index) => {
                                    return index !== stepEditIndex ? (<>
                                        <li className="singleLine" >
                                            {index+1}.
                                            {step}
                                        <div>
                                            <button className="edit-icon"
                                            onClick={()=>editStep(step, index)}

                                            ></button>
                                            <button className="trash-icon"
                                                onClick={()=>removeStep(step)}
                                            >
                                            </button>
                                        </div>

                                        </li>
                                        </>) :
                                        (<>
                                        <input className="input-recipe-edit" value={editValueStep} onChange={e => setEditValueStep(e.target.value)}/>
                                        <button onClick={confirmEditStep} className="add-instruction-edit"></button>
                                        </>)
                        })}
                            </ul>

                        </div>
                    </div>
                    <div className="add-ingredient">
                    <p>Składniki</p>
                    <hr className="hr-recipe"></hr>
                        <div className="text-recipe">
                            <input className="input-recipe"
                                   onChange={e => setIngredient(e.target.value)}/>
                            <button onClick={() => {setIngredients([...ingredients, ingredient]);
                                document.getElementsByClassName("input-recipe").item(1).value=""}}
                                    className="add-instruction"></button>
                        </div>
                        <div className="scroll">
                            <ul className="list-recipe">
                                {ingredients.map((ingredient, index) => {
                                    return index !== ingredientEditIndex ? (<>
                                        <li className="singleLine">
                                            {ingredient}
                                            <div>
                                                <button className="edit-icon"
                                                        onClick={()=>editIngredient(ingredient, index)}
                                                ></button>
                                                <button className="trash-icon"
                                                        onClick={()=>removeIngredient(ingredient)}>

                                                </button>
                                            </div>
                                        </li>
                                    </>) :
                                    (<>
                                        <input className="input-recipe-edit" value={editValueIngredient} onChange={e => setEditValueIngredient(e.target.value)}/>
                                        <button onClick={confirmEditIngredient} className="add-instruction-edit"></button>
                                    </>)
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}

function mapStateToProps(state) {
    console.log(state);
    if(state.recipeStore.recipe == null) {
        return {}
    }
    const result = {
        recipe: state.recipeStore.recipe
    };
    console.log(result);
    return result;
};

export default connect(mapStateToProps)(AddNewRecipe);

