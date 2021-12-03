import React from 'react'
import WorkoutCard from './WorkoutCard'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import CreateWorkout from './CreateWorkout'

function UserPage({setLoggedIn, setCreateWorkout, userWorkouts, setUserWorkouts}) {

    const [popUp, setPopUp] = useState(false)

    const createWorkoutPopUp = () => {setPopUp(true)}

    useEffect(() => {
        fetch("/workout_sessions")
        .then(res => res.json())
        .then(data =>setUserWorkouts(data))
        setLoggedIn(true)
    }, [])

    const workoutList = userWorkouts.map(workouts => <WorkoutCard title={workouts.title} weekday={workouts.weekday} key={workouts.id}/>)

    return (
        <div>
            <br/>
            <h1>Sore Today, Strong Tomorrow!</h1>
            
            {workoutList}
            
            <button onClick={createWorkoutPopUp}class="btn btn-primary">Create New Workout</button>
            

            <CreateWorkout open={popUp} onClose={() => setPopUp(false)}setCreateWorkout={setCreateWorkout}/>
            
        </div>
    )
}

export default UserPage
