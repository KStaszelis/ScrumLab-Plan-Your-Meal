import React,{useState, useEffect} from "react";
const RecipesView =()=>{
    const [listPlan, setListPlan]=useState([]);
    useEffect(()=>{

        fetch('http://localhost:3002/schedules')
            .then (resp =>{
                return resp.json();
            })
            .then(data =>{
                console.log(data);
                setListPlan(data);

            })

    })



    return (
        <>

            <div className="box-recipe">
                <div className="header-recipe">
                    <h3>LISTA PLANÓW</h3>
                    <button className="add-instruction"></button>
                </div>
                <hr className="hr-recipeView"></hr>

                <div className="grid-container-plans">

                    <div className="ID">ID</div>
                    <div className="Nazwa">NAZWA</div>
                    <div className="Opis">OPIS</div>
                    <div className="WeekNumber">TYDZIEN</div>
                    <div className="Akcje">AKCJE</div>

                    <div className="ID-content">{listPlan.map(item=><li className="li-recipeView">{item.id}</li>)}</div>

                    <div className="Nazwa-content">{listPlan.map(item=><li className="li-recipeView">{item.name}</li>)}</div>

                    <div className="Opis-content">{listPlan.map(item=><li className="li-recipeView">{item.description}</li>)}</div>
                    <div className="WeekNumber-content">{listPlan.map(item=><li className="li-recipeView">{item.weekNumber}</li>)}</div>
                    <div className="Akcje-content">{listPlan.map(item=>(<>
                        <li className="li-recipeView">
                            <div className="action-button-space">
                                <button className="edit-icon edit-icon-view"></button>
                                <button className="trash-icon trash-icon-view"

                                ></button></div></li>
                    </>))}</div>

                </div></div>
        </>
    )
}
export default RecipesView;