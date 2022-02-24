import {combineReducers} from 'redux'
import { exercisesList, musclesList, setLoggedIn, setCurrentUser, getUserWorkout, getSessionWorkouts} from './reducers'


const allReducers = combineReducers({
    exerciseList: exercisesList,
    musclesList: musclesList,
    setLoggedIn: setLoggedIn,
    setCurrentUser: setCurrentUser,
    getUserWorkout: getUserWorkout,
    getSessionWorkouts: getSessionWorkouts,
})

export default allReducers