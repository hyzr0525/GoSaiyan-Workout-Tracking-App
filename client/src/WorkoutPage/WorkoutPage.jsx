import React from 'react'
import SideBar from '../EditingPage/SideBar'
import ExerciseDetails from './ExerciseDetails'
import {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {getSessionWorkouts} from "../states/action/actionCreater"

function WorkoutPage({ editWorkout, setEditWorkout}) {

    const [note , setNote] = useState([])
    const [workoutSets , setWorkoutSets] = useState([])
    const [reps , setReps] = useState([])
    const [exerciseName , setExerciseName] = useState([])
    const [exerciseImg , setExerciseImg] = useState("https://i.pinimg.com/originals/1f/fd/48/1ffd4837dab3c7fae3d7c46ef8679bbb.gif")
    const [desc , setDesc] = useState([])
    const [muscleName , setMuscleName] = useState("Full Body")
    const [muscleImg , setMuscleImg] = useState("https://i.pinimg.com/474x/3c/53/e4/3c53e484c120a28cbe47d235e47d5d22.jpg")
    const [exerciseId , setExerciseId] = useState([])
    const [workoutLogId , setWorkoutLogId] = useState([])
    const dispatch = useDispatch();
    const sessionWorkouts = useSelector((state) => state.getSessionWorkouts)
    const id = useParams().id
    
    
    useEffect(() => {
        fetch(`/workout_sessions/${id}`)
        .then(res => res.json())
        .then(data =>{
           dispatch(getSessionWorkouts(data))
           setEditWorkout(false)
        })
    }, [])

    useEffect(() => {
        if (sessionWorkouts.workout_logs){
            const firstWorkout =  sessionWorkouts.workout_logs[0]
            if  (firstWorkout){
                setDesc(firstWorkout.exercise.desc)
                setNote(firstWorkout.note)
                setWorkoutSets(firstWorkout.set)
                setReps(firstWorkout.rep)
                setExerciseImg(firstWorkout.exercise.image)
                setExerciseName(firstWorkout.exercise.name)
                setMuscleName(firstWorkout.exercise.muscle.name)
                setMuscleImg(firstWorkout.exercise.muscle.image)
                setExerciseId(firstWorkout.exercise.id)
                setWorkoutLogId(firstWorkout.id)
            }
        }
    }, [sessionWorkouts])

    const userWorkoutSession = sessionWorkouts.workout_logs?.map(workoutLog => (<SideBar  key={workoutLog.id} desc={workoutLog.exercise.desc} exercise={workoutLog.exercise.name} workoutLogId={workoutLog.id} note={workoutLog.note} sets={workoutLog.set} reps={workoutLog.rep} exerciseImg={workoutLog.exercise.image} muscleName ={workoutLog.exercise.muscle.name} exerciseId={workoutLog.exercise.id} muscleImg={workoutLog.exercise.muscle.image} setNote={setNote} setWorkoutSets={setWorkoutSets} setReps={setReps} setExerciseName={setExerciseName} setExerciseId={setExerciseId} setWorkoutLogId={setWorkoutLogId} setExerciseImg={setExerciseImg} setDesc={setDesc} setMuscleName={setMuscleName} setMuscleImg={setMuscleImg} editWorkout={editWorkout}/>))


    return (
    <div>
        <div className="SideBar">
        <p style={{ fontSize: 20, fontWeight: 'bold' }}>{sessionWorkouts.title}</p>
        <hr style={{color: "#ed8728"}}/>
        {userWorkoutSession}
        <Link exact to={`/edit/${id}`}>
        <button>Edit Workout</button>
        </Link>
        </div>

        <div className="ExerciseDetails">
            <ExerciseDetails note={note} workoutSets={workoutSets} reps={reps} exerciseName={exerciseName} exerciseImg={exerciseImg} desc={desc} workoutLogId={workoutLogId} muscleName={muscleName} muscleImg={muscleImg} id={id} exerciseId={exerciseId} />
        </div>
    </div>
    )
}

export default WorkoutPage
