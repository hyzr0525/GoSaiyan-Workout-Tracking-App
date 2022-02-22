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

export const filterByMuscles = (state="", action) => {
    switch(action.type){
        case ActionTypes.FILTER_BY_MUSCLES:
            return action.payload
        default:
            return state;
    }
}

export const musclesList = (state=[], action) => {
    switch(action.type){
        case ActionTypes.GET_MUSCLES_LIST:
            return state = action.payload
        default:
            return state;
    }
}