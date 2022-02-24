import React from 'react'


function SideBar({exerciseImg, setSessionWorkouts, muscleName, muscleImg, sets, reps, note, exercise, workoutLogId, desc, setNote, setWorkoutSets, setReps, setExerciseName, setExerciseImg, setDesc, setMuscleName, setMuscleImg, setExerciseId, exerciseId, setWorkoutLogId, editWorkout, workoutData}) {


    function deleteExercise(){
    fetch(`http://localhost:3000/workout_logs/${workoutLogId}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(setSessionWorkouts)
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
      <div className="SideBarList">
            <p onClick={handleChange}>{exercise}
            {editWorkout ? <button className="DeleteBtn" onClick={deleteExercise}>x</button> : null}
            </p>
      </div>
    )
}

export default SideBar
