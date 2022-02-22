import {combineReducers} from 'redux'
import { exercisesList, musclesList, setLoggedIn, setCurrentUser} from './reducers'


const allReducers = combineReducers({
    exerciseList: exercisesList,
    musclesList: musclesList,
    setLoggedIn: setLoggedIn,
    setCurrentUser: setCurrentUser,
})

export default allReducers