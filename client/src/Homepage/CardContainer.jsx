import React from 'react'
import ExerciseCards from './ExerciseCards'
import {useSelector} from 'react-redux'

function CardContainer() {

    const exercises = useSelector((state) => state.exerciseList.filteredList)
    
      const exerciseCards = exercises.map(exercises =><div className="CardDetails"> <ExerciseCards name={exercises.name} image={exercises.image} key={exercises.id} muscle={exercises.muscle.name} muscleImg={exercises.muscle.image} desc={exercises.desc}/> </div>)
    

    return (
        <div className="CardContainer">
            {exerciseCards}
        </div>
    )
}

export default CardContainer
