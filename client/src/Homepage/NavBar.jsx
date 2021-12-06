import React from 'react'

function NavBar({name, setExercisesList, muscleId, exercisesList}) {


    function filterExercise(){
        const filteredExercises = exercisesList.filter(exercises => muscleId === exercises.muscle.id)
        setExercisesList(filteredExercises)
    }


    return (
        <div onClick={filterExercise}>
            <h4>{name}</h4>
        </div>
    )
}

export default NavBar
