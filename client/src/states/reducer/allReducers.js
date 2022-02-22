import {combineReducers} from 'redux'

import { exercisesList, musclesList} from './reducers'


const allReducers = combineReducers({
    exerciseList: exercisesList,
    musclesList: musclesList,
})

export default allReducers