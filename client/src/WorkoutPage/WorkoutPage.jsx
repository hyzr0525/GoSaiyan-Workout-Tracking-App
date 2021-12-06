import React from 'react'
import SideBar from '../EditingPage/SideBar'
import ExerciseDetails from './ExerciseDetails'
import {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

function WorkoutPage({setSessionWorkouts, setLoggedIn, editWorkout, sessionWorkouts}) {

    const [note , setNote] = useState([])
    const [workoutSets , setWorkoutSets] = useState([])
    const [reps , setReps] = useState([])
    const [exerciseName , setExerciseName] = useState([])
    const [exerciseImg , setExerciseImg] = useState([])
    const [desc , setDesc] = useState([])
    const [muscleName , setMuscleName] = useState([])
    const [muscleImg , setMuscleImg] = useState([])
    const [exerciseId , setExerciseId] = useState([])
    const [workoutLogId , setWorkoutLogId] = useState([])

    const id = useParams().id
    
    
    useEffect(() => {
        fetch(`/workout_sessions/${id}`)
        .then(res => res.json())
        .then(data =>{
           setSessionWorkouts(data)
           setLoggedIn(true)})
    }, [])

    

    const userWorkoutSession = sessionWorkouts.workout_logs?.map(workoutLog => (<SideBar  key={workoutLog.id} desc={workoutLog.exercise.desc} exercise={workoutLog.exercise.name} workoutLogId={workoutLog.id} note={workoutLog.note} sets={workoutLog.set} reps={workoutLog.rep} exerciseImg={workoutLog.exercise.image} muscleName ={workoutLog.exercise.muscle.name} exerciseId={workoutLog.exercise.id} muscleImg={workoutLog.exercise.muscle.image} setNote={setNote} setWorkoutSets={setWorkoutSets} setReps={setReps} setExerciseName={setExerciseName} setExerciseId={setExerciseId} setWorkoutLogId={setWorkoutLogId} setExerciseImg={setExerciseImg} setDesc={setDesc} setMuscleName={setMuscleName} setMuscleImg={setMuscleImg} editWorkout={editWorkout}/>))

    // const ExerciseDetails = sessionWorkouts.workout_logs?.map(workoutLog => (<ExerciseDetails key={workoutLog.id} exercise={workoutLog.exercise.name} workoutLogId={workoutLog.id}/>))  

    return (
    <div>
        <div className="SideBar">
        {userWorkoutSession}
        <Link exact to={`/edit/${id}`}>
        <button>Edit Workout</button>
        </Link>
        </div>

        <div>
            <ExerciseDetails note={note} workoutSets={workoutSets} reps={reps} exerciseName={exerciseName} exerciseImg={exerciseImg} desc={desc} workoutLogId={workoutLogId} muscleName={muscleName} muscleImg={muscleImg} id={id} exerciseId={exerciseId}/>
        </div>
    </div>
    )
}

export default WorkoutPage
