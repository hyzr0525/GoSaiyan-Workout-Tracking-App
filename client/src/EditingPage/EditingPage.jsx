import React from 'react'
import NavBar from '../Homepage/NavBar'
import ExerciseDisplay from './ExerciseDisplay'
import SideBar from './SideBar'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


function EditingPage({musclesList, sessionWorkouts, exercisesList, setSessionWorkouts, setLoggedIn, editWorkout, setEditWorkout}) {

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

     const sessionId = useParams().id

     useEffect(() => {
         fetch(`/workout_sessions/${sessionId}`)
         .then(res => res.json())
         .then(data => {
            setSessionWorkouts(data)
            setLoggedIn(true)
            setEditWorkout(true)
        })
     }, [])

    const muscleGroups = musclesList.map(muscles => <NavBar key={muscles.id} name={muscles.name}/>)

    const userWorkoutSession = sessionWorkouts.workout_logs?.map(workoutLog => (<SideBar key={workoutLog.id} exercise={workoutLog.exercise.name} workoutLogId={workoutLog.id} sessionId={workoutLog.workout_session_id} note={workoutLog.note} sets={workoutLog.set} reps={workoutLog.rep} exerciseImg={workoutLog.exercise.image} muscleName ={workoutLog.exercise.muscle.name} exerciseId={workoutLog.exercise.id} muscleImg={workoutLog.exercise.muscle.image} setNote={setNote} setWorkoutSets={setWorkoutSets} setReps={setReps} setExerciseName={setExerciseName} setExerciseId={setExerciseId} setWorkoutLogId={setWorkoutLogId} setExerciseImg={setExerciseImg} setDesc={setDesc} setMuscleName={setMuscleName} setMuscleImg={setMuscleImg} editWorkout={editWorkout}/>))

    

    
    return (
     <div>
        <div className="NavBar">
            {muscleGroups}
        </div>
        <div>
        <ExerciseDisplay editWorkout={editWorkout} exercisesList={exercisesList} sessionId={sessionId}/>
        </div>
        <div className="SideBar">
            {userWorkoutSession}
            <Link exact to= "/user">
            <button class="btn btn-primary">SAVE</button>
            </Link>
        </div>
     </div>
    )
}

export default EditingPage
