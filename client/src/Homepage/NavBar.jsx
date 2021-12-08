import React from 'react'

function NavBar({name, setFilterCategory}) {


    // function filterExercise(){
    //     const filteredExercises = exercisesList.filter(exercises => muscleId === exercises.muscle.id)
    //     setExercisesList(filteredExercises)
    // }


    return (
        <div onClick={() => setFilterCategory(name)}>
            <h4>{name}</h4>
        </div>
    )
}

export default NavBar
