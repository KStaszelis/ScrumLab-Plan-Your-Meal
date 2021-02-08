import React, {useEffect, useState} from 'react';
// import prev from '../../public/images/prev.svg';
// import next from '../../public/images/next.svg';


import useStateWithCallback from "use-state-with-callback/lib";


import PlanScreen from "./PlansScreen";



const Plan = () =>{

    const [meals, setMeals] = useState([]);
    const [allPlans, setAllPlans] = useState([]);

    useEffect(() => {

        console.log('run');


        fetch('http://localhost:3002/recipes')
            .then(response => response.json())
            .then(response => setMeals(response))

        fetch('http://localhost:3002/schedules')
            .then(response => response.json())
            .then(response => setAllPlans(response))
    }, []);



    const getWeekNumber = () => {
        const today = new Date();
        const firstDayOfYear = new Date(today.getFullYear(), 0, 1);

        return  Math.ceil((((today - firstDayOfYear) / 86400000) + firstDayOfYear.getDay() + 1) / 7);
    };

    const getCurrentSchedule = (currentWeek, day) => {
        let currentPlan = allPlans.filter(el => el.weekNumber === currentWeek);
        if(!currentPlan[0]){
            return ['jedzenie'];
        }

        currentPlan = currentPlan[0];



        const allMeals = [
            [...currentPlan.monday],
            [...currentPlan.tuesday],
            [...currentPlan.wednesday],
            [...currentPlan.thrusday],
            [...currentPlan.friday],
            [...currentPlan.satruday],
            [...currentPlan.sunday],
        ]

        return allMeals[day];

    }

    const [currentWeek, setCurrentWeek] = useStateWithCallback(getWeekNumber(), currentWeek => {
        getCurrentSchedule(currentWeek);
    });



    const  nextPlan =  () => {

        allPlans.sort((a,b) => a.weekNumber - b.weekNumber);

        const plans = allPlans.filter(el => el.weekNumber > currentWeek);
        if(plans.length === 0){
            setCurrentWeek(allPlans[0].weekNumber);
        }
        else{
            setCurrentWeek(plans[0].weekNumber);
        }
    };

    const prevPlan = () => {

        allPlans.sort((a,b) => b.weekNumber - a.weekNumber);

        const plans = allPlans.filter(el => parseInt(el.weekNumber) < currentWeek);
        plans.sort((a,b) => b.weekNumber - a.weekNumber)

        if(plans.length === 0){
            allPlans.sort((a,b) => a.weekNumber - b.weekNumber);
            setCurrentWeek(allPlans[allPlans.length - 1].weekNumber);
        }
        else{
            setCurrentWeek(plans[0].weekNumber);
        }
    };






    return (
        <>
        <div className='container' style={{display: 'flex',  alignItems: 'center'}}>
            <div className={'wrapper'}>
                <div className={'grid'}>
                    <div className='title'>
                        Twój plan na {currentWeek} tydzień
                    </div>
                    <div className={'day-names'}>
                        {
                            ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'].map((d, i) => <div className="week">
                                <p className='day-name'>{d}</p>
                                <div className='day-meal-name'>
                                    {
                                       getCurrentSchedule(currentWeek, i).map((meal) =>
                                           <div className='day-meal'>{meal}</div>)
                                    }



                                </div>
                            </div>)
                        }
                    </div>
                    <div className='btn'>
                        <button  className='btn-left' onClick={prevPlan}>
                            <img src="../images/prev.svg"/> poprzedni</button>
                        <button className='btn-right' onClick={nextPlan}>
                            następny <img src="../images/next1.svg"/></button>
                    </div>
                </div>

            </div>

        </div>

            </>

    )
};



export default Plan








