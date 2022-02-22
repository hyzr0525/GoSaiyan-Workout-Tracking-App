import React from 'react'
import ExerciseCards from '../Homepage/ExerciseCards'
import {useSelector} from "react-redux"

function ExerciseDisplay({editWorkout, sessionId, setSessionWorkouts}) {

    const exercises = useSelector((state) => state.exerciseList.filteredList)
    const defaultExercises = useSelector((state) => state.exerciseList.exercises)

    const exerciseCards = exercises.length !==0? exercises.map(exercises => <div className="EditingPageCardDetails"> <ExerciseCards sessionId={sessionId} name={exercises.name} image={exercises.image} key={exercises.id} muscle={exercises.muscle.name} muscleImg={exercises.muscle.image} desc={exercises.desc} editWorkout={editWorkout} id={exercises.id} setSessionWorkouts={setSessionWorkouts}/></div>) : defaultExercises.map(exercises => <div className="EditingPageCardDetails"> <ExerciseCards sessionId={sessionId} name={exercises.name} image={exercises.image} key={exercises.id} muscle={exercises.muscle.name} muscleImg={exercises.muscle.image} desc={exercises.desc} editWorkout={editWorkout} id={exercises.id} setSessionWorkouts={setSessionWorkouts}/></div>)

    return (
        <div className="EditingPageCardDisplay">
            {exerciseCards}
        </div>
    )
}

export default ExerciseDisplay
