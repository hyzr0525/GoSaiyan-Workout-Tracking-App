import React from 'react'
import WorkoutCard from './WorkoutCard'
import {useState, useEffect} from 'react'
import CreateWorkout from './CreateWorkout'
import {useDispatch, useSelector} from "react-redux"
import {getUserWorkout} from "../states/action/actionCreater"

function UserPage({setEditWorkout}) {

    const dispatch = useDispatch()
    const userWorkouts = useSelector((state) => state.getUserWorkout)
    const [popUp, setPopUp] = useState(false)

    useEffect(() => {
        fetch("/workout_sessions")
        .then(res => res.json())
        .then(data => 
            dispatch(getUserWorkout(data)))
        setEditWorkout(false)
    }, [userWorkouts])

    const workoutList = userWorkouts.map(workouts =>  <WorkoutCard title={workouts.title} workoutId={workouts.id} weekday={workouts.weekday} key={workouts.id}/>)

    return (
        <div>
            <br/>
            <h1 style={{ color: 'white' }}>Sore Today, Strong Tomorrow!</h1>
            <hr style={{color:"#ed8728", marginLeft: "5%", marginRight:"5%", marginTop:"3%"}}/>
            {workoutList}
            
            <button onClick={() => setPopUp(true)}class="CreateWorkoutBtn"> + Create New Workout</button>
            
            <CreateWorkout open={popUp} onClose={() => setPopUp(false)}/>
            
        </div>
    )
}

export default UserPage
