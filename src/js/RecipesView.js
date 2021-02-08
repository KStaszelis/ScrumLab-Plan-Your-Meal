import React,{useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import editRecipe from "./actions/recipe";

const RecipesView =()=>{
    const [list, setList]=useState([]);

   useEffect(()=>{
       fetch('http://localhost:3002/recipes')
           .then (resp =>{
           return resp.json();
       })
           .then(data =>{
           setList(data);
       })
   }, []);

    const removeRecipe =(item)=>{
        setList([...list].filter((el)=>el.id !==item.id))

        fetch('http://localhost:3002/recipes/' +item.id, {
            method: 'DELETE'
        })
            .then(response => response.json())
    };

    const dispatch = useDispatch();

    const onEditRecipe =(item)=>{
        dispatch(editRecipe({
            recipe: item}));
    };

    return (
        <>

        <div className="box-recipe">
            <div className="header-recipe">
                <h3>LISTA PRZEPISÓW</h3>
                <button className="add-instruction"></button>
            </div>
            <hr className="hr-recipeView"></hr>

            <div className="grid-container">

                <div className="ID">ID</div>
                <div className="Nazwa">NAZWA</div>
                <div className="Opis">OPIS</div>
                <div className="Akcje">AKCJE</div>

                <div className="ID-content">{list.map(item=><li className="li-recipeView" id={item.id}>{item.id}</li>)}
               </div>

                <div className="Nazwa-content">{list.map(item=><li className="li-recipeView" id={item.id}>{item.name}</li>)}</div>

                <div className="Opis-content">{list.map(item=><li className="li-recipeView" id={item.id}>{item.description}</li>)}</div>
                <div className="Akcje-content" >{list.map(item=>(<>
                    <li className="li-recipeView" id={item.id}>
                        <div className="action-button-space">
                            <button className="edit-icon edit-icon-view"
                                id={item.id}
                                onClick={()=>onEditRecipe(item)}>
                            </button>
                            <button className="trash-icon trash-icon-view"
                                    id={item.id}
                                    onClick={()=>removeRecipe(item)}
                            ></button>
                        </div>
                    </li>
                </>))}</div>

            </div></div>
    </>
    )
}
export default RecipesView;
