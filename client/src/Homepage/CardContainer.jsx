import React from 'react'
import ExerciseCards from './ExerciseCards'

function CardContainer({exercisesList}) {

    const exerciseCards = exercisesList.map(exercises => <ExerciseCards name={exercises.name} image={exercises.image} key={exercises.id}/>)

    return (
        <div className="CardContainer">
            {exerciseCards}
        </div>
    )
}

export default CardContainer
