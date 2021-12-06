import React from 'react'
import CardContainer from './CardContainer'
import NavBar from './NavBar'

function Homepage({musclesList, exercisesList, setExercisesList}) {

    const muscleGroups = musclesList.map(muscles => <NavBar key={muscles.id} name={muscles.name} muscleId={muscles.id} setExercisesList={setExercisesList} exercisesList={exercisesList}/>)

    

    return (
        <div>
            <div className="NavBar">
            {muscleGroups}
            </div>
            <CardContainer exercisesList={exercisesList}/>
        </div>
    )
}

export default Homepage
