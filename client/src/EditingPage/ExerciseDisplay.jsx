import React from 'react'
import ExerciseCards from '../Homepage/ExerciseCards'

function ExerciseDisplay({exercisesList, editWorkout, sessionId, setSessionWorkouts}) {

    const exerciseCards = exercisesList.map(exercises => <div className="EditingPageCardDetails"><ExerciseCards sessionId={sessionId} name={exercises.name} image={exercises.image} key={exercises.id} muscle={exercises.muscle.name} muscleImg={exercises.muscle.image} desc={exercises.desc} editWorkout={editWorkout} id={exercises.id} setSessionWorkouts={setSessionWorkouts}/></div>)

    return (
        <div className="EditingPageCardDisplay">
            {exerciseCards}
        </div>
    )
}

export default ExerciseDisplay
