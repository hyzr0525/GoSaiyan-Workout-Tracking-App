import React from 'react'
import ExerciseCards from './ExerciseCards'
import {useSelector} from 'react-redux'

function CardContainer() {

    const exercises = useSelector((state) => state.exerciseList.filteredList)
    const defaultExercises = useSelector((state) => state.exerciseList.exercises)

      const exerciseCards = exercises.length !== 0? exercises.map(exercises =><div className="CardDetails"> <ExerciseCards name={exercises.name} image={exercises.image} key={exercises.id} muscle={exercises.muscle.name} muscleImg={exercises.muscle.image} desc={exercises.desc}/> </div>) :  defaultExercises.map(exercises =><div className="CardDetails"> <ExerciseCards name={exercises.name} image={exercises.image} key={exercises.id} muscle={exercises.muscle.name} muscleImg={exercises.muscle.image} desc={exercises.desc}/> </div>)
    

    return (
        <div className="CardContainer">
            {exerciseCards}
        </div>
    )
}

export default CardContainer
