import React from 'react'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'


function SideBar({exerciseImg, muscleName, muscleImg, sets, reps, note, exercise, workoutLogId, desc, setNote, setWorkoutSets, setReps, setExerciseName, setExerciseImg, setDesc, setMuscleName, setMuscleImg, setExerciseId, exerciseId, setWorkoutLogId, editWorkout}) {


    function deleteExercise(){
    fetch(`http://localhost:3000/workout_logs/${workoutLogId}`, {
        method: "DELETE"})
    }
    
    function handleChange(){
        setDesc(desc)
        setNote(note)
        setWorkoutSets(sets)
        setReps(reps)
        setExerciseImg(exerciseImg)
        setExerciseName(exercise)
        setMuscleName(muscleName)
        setMuscleImg(muscleImg)
        setExerciseId(exerciseId)
        setWorkoutLogId(workoutLogId)
    }

    return (
      <div>
            <p onClick={handleChange}>{exercise}
            {editWorkout ? <button onClick={deleteExercise}>x</button> : null}
            </p>
      </div>
    )
}

export default SideBar
