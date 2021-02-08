import React, {useState, useEffect} from 'react';

const AddPlan = () =>{


    const [meals, setMeals] = useState([]);



    useEffect(() => {
        fetch('http://localhost:3002/recipes')
            .then(response => response.json())
            .then(response => setMeals(response))
    }, [])


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [weekNumber, setWeekNumber] = useState('');


    const handleWeekNumber = e =>{
        setWeekNumber(e.target.value)
    }

    const handleTitle = e =>{
        setTitle(e.target.value);
    };

    const handleDescription = e =>{
        setDescription(e.target.value)
    };

    async function savePlan(e) {
        e.preventDefault();

        const days = {
            'Poniedziałek': 'monday',
            'Wtorek': 'tuesday',
            'Środa': 'wednesday',
            'Czwartek': 'thrusday',
            'Piątek': 'friday',
            'Sobota': 'satruday',
            'Niedziela': 'sunday'
        }

        const recipesDays = {};

        for(let select of e.target.elements){
            if(select.getAttribute('name') && days[select.getAttribute('name')]){
                if(recipesDays[days[select.getAttribute('name')]]){
                    recipesDays[days[select.getAttribute('name')]].push(select.value);
                }
                else{
                    recipesDays[days[select.getAttribute('name')]] = [select.value];
                }

            }
        }


        const apiData = {
            name: title,
            description: description,
            weekNumber: weekNumber
        }

        for(let prop in recipesDays){
            apiData[prop] = recipesDays[prop];
        }

        fetch('http://localhost:3002/schedules', {
            method: 'POST',
            body: JSON.stringify(apiData),
            headers: new Headers({'content-type': 'application/json'})
        })
            .then(response => console.log(response));
    }







    return (
        <div className='container'>
            <form className={'wrapper-add-plan'} onSubmit={savePlan}>
                <div className='grid grid-add-plan-with'>
                    <div className='title-add-plan'  >
                        <div className="element-add-plan">
                            <p>Nowy Plan</p>
                            <button className='add-plan-button'>Zapisz i zamknij</button>
                        </div>

                        <div className='element-add-plan'>
                            <p className='name-element-add-plan'>Nowy plan</p>
                            <input value={title} onChange={handleTitle} className='first-input-add-plan' style={{border: '1px solid gray'}} type="text"/>
                        </div>


                        <div className="element-add-plan">
                            <p className='name-element-add-plan'>Opis planu</p>
                            <textarea value={description} onChange={handleDescription} className="second-element-add-plan"  style={{border: '1px solid gray'}} name="" id="" cols="30" rows="10"></textarea>
                        </div>

                        <div className="element-add-plan short-element">
                            <p className="week-number-add-plan name-element-add-plan">Numer tygodnia</p>
                            <input value={weekNumber} onChange={handleWeekNumber} className="third-element-add-plan" style={{border: '1px solid gray'}} type="text"/>
                        </div>

                    </div>

                    <div className="add-plan-wrapper">
                        <div className="weekdays">
                        {
                            ['Śniadanie', 'drugie śniadanie', 'Zupa', 'Drugie danie', 'Kolacja'].map((d) => <div className="weekday">
                                <p className='meal-upper-name'>{d.toUpperCase()}</p>
                            </div>)
                        }
                        </div>

                        {
                            ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'].map((day) => <div className="week-meal">
                                <div>
                                    {day}
                                </div>
                                {
                                    ['Śniadanie', 'drugie śniadanie', 'Zupa', 'Drugie danie', 'Kolacja'].map(() => <div> <select name={day}>
                                        <option>Jedzenie</option>
                                        {meals.map(item => (
                                            <option>
                                                {item.name}
                                            </option>
                                        ))}</select></div>)
                                }
                            </div> )
                        }
                    </div>


                    {/*<div className={'day-names'}>*/}
                    {/*    {*/}
                    {/*        ['Śniadanie', 'drugie śniadanie', 'Zupa', 'Drugie danie', 'Kolacja'].map((d) => <div className="week">*/}
                    {/*            <p className='day-name'>{d.toUpperCase()}</p>*/}
                    {/*            <div className='day-meal-name'>*/}

                    {/*                {*/}
                    {/*                    [ <select>śniadanie</select>, <select></select>, <select></select>, <select></select>, <select></select>, <select></select>, <select></select>].map((meal) =>*/}
                    {/*                        <div className='day-meal'>{meal}</div>)*/}
                    {/*                }*/}
                    {/*            </div>*/}
                    {/*        </div>)*/}
                    {/*    }*/}
                    {/*</div>*/}

                </div>
            </form>
        </div>
    )
}


export default AddPlan