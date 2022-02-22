import {combineReducers} from 'redux'
import { exercisesList, filterByMuscles } from './exercisesReducer'


const allReducers = combineReducers({
    exerciseList: exercisesList,
    muscleGroup: filterByMuscles,
    
})

export default allReducers