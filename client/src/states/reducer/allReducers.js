import {combineReducers} from 'redux'
import { exercisesList, musclesList, setLoggedIn, setCurrentUser, getUserWorkout} from './reducers'


const allReducers = combineReducers({
    exerciseList: exercisesList,
    musclesList: musclesList,
    setLoggedIn: setLoggedIn,
    setCurrentUser: setCurrentUser,
    getUserWorkout: getUserWorkout,
})

export default allReducers