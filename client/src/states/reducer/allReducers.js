import {combineReducers} from 'redux'
import { exercisesList, filterByMuscles, musclesList } from './reducers'


const allReducers = combineReducers({
    exerciseList: exercisesList,
    muscleGroup: filterByMuscles,
    musclesList: musclesList,
})

export default allReducers