import React from 'react'
import ExerciseCards from './ExerciseCards'

function CardContainer({exercisesList}) {

    const exerciseCards = exercisesList.map(exercises =><div className="CardDetails"> <ExerciseCards name={exercises.name} image={exercises.image} key={exercises.id} muscle={exercises.muscle.name} muscleImg={exercises.muscle.image} desc={exercises.desc}/> </div>)

    
    return (
        <div className="CardContainer">
            {exerciseCards}
        </div>
    )
}

export default CardContainer
