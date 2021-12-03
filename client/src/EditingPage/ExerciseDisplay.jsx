import React from 'react'
import ExerciseCards from '../Homepage/ExerciseCards'

function ExerciseDisplay({exercisesList}) {

    const exerciseCards = exercisesList.map(exercises => <ExerciseCards name={exercises.name} image={exercises.image} key={exercises.id} muscle={exercises.muscle.name} muscleImg={exercises.muscle.image} desc={exercises.desc}/>)

    return (
        <div className="CardContainer">
            {exerciseCards}
        </div>
    )
}

export default ExerciseDisplay
