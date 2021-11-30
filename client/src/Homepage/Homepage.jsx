import React from 'react'
import CardContainer from './CardContainer'
import NavBar from './NavBar'

function Homepage({musclesList, exercisesList}) {

    const muscleGroups = musclesList.map(muscles => <NavBar key={muscles.id} name={muscles.name}/>)
    
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
