import { ActionTypes } from "../action/action-types"

const allExercises = {
    exercises: [],
}

export const exercisesList = (state=allExercises, action) => {
    switch(action.type){
        case ActionTypes.GET_EXERCISES_LIST:
            return {...state, exercises: action.payload}
        case ActionTypes.SELECTED_EXERCISE:
            return state;
        default:
            return state;
    }
}