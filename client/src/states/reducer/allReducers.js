import {combineReducers} from 'redux'
import { exercisesList } from './exercisesReducer'

const allReducers = combineReducers({
    exerciseList: exercisesList
})

export default allReducers