import React from 'react'
import NavBar from '../Homepage/NavBar'
import ExerciseDisplay from './ExerciseDisplay'
import SideBar from './SideBar'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"
import {filterByMuscles} from "../states/action/actionCreater"


function EditingPage({sessionWorkouts, exercisesList, setSessionWorkouts, setLoggedIn, editWorkout, setEditWorkout}) {

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
    
    const musclesList = useSelector((state)=>state.musclesList)
    const dispatch = useDispatch()
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

    const muscleGroups = musclesList.map(muscles => <div className="MuscleList"> <NavBar key={muscles.id} name={muscles.name}/></div>)

    const userWorkoutSession = sessionWorkouts.workout_logs?.map(workoutLog => (<SideBar key={workoutLog.id} exercise={workoutLog.exercise.name} workoutLogId={workoutLog.id} sessionId={workoutLog.workout_session_id} note={workoutLog.note} sets={workoutLog.set} reps={workoutLog.rep} exerciseImg={workoutLog.exercise.image} muscleName ={workoutLog.exercise.muscle.name} exerciseId={workoutLog.exercise.id} muscleImg={workoutLog.exercise.muscle.image} setNote={setNote} setWorkoutSets={setWorkoutSets} setReps={setReps} setExerciseName={setExerciseName} setExerciseId={setExerciseId} setSessionWorkouts={setSessionWorkouts} setWorkoutLogId={setWorkoutLogId} setExerciseImg={setExerciseImg} setDesc={setDesc} setMuscleName={setMuscleName} setMuscleImg={setMuscleImg} editWorkout={editWorkout}/>))

    

    
    return (
     <div>
        <div className="NavBar">
        <div className="MuscleList" onClick={() => dispatch(filterByMuscles("All"))}>
                <h4>All</h4>
        </div>
        
            {muscleGroups}
        </div>
        
        <div>
        <ExerciseDisplay editWorkout={editWorkout} exercisesList={exercisesList} sessionId={sessionId} setSessionWorkouts={setSessionWorkouts}/>
        </div>
        <div className="SideBar">
            <p style={{ fontSize: 20, fontWeight: 'bold' }}>{sessionWorkouts.title}</p>
            <hr style={{color: "#ed8728"}}/>
            {userWorkoutSession}
            <Link exact to= {`/WorkoutSessions/${sessionId}`}>
            <button>SAVE</button>
            </Link>
        </div>
     </div>
    )
}

export default EditingPage
