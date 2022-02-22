import { ActionTypes } from "../action/action-types"

const allExercises = {
    exercises: [],
    filteredList: [],
}

export const exercisesList = (state=allExercises, action) => {
    switch(action.type){
        case ActionTypes.GET_EXERCISES_LIST:
            return {...state, exercises: action.payload}

        case ActionTypes.FILTER_BY_MUSCLES:
            const filteredExercises = () => {
                if (action.payload !== "All"){
                  const filteredList = state.exercises.filter(exercises => exercises.muscle.name.includes(action.payload))
                  return {...state, filteredList: filteredList}
                }else{
                  return {...state, filteredList: state.exercises}
                }
              }
              return filteredExercises();  

        case ActionTypes.SELECTED_EXERCISE:
            return state;

        default:
            return state;
    }
}

export const musclesList = (state=[], action) => {
    switch(action.type){
        case ActionTypes.GET_MUSCLES_LIST:
            return state = action.payload;
        default:
            return state;
    }
}

export const setLoggedIn = (state = false, action) => {
    switch(action.type){
        case ActionTypes.SET_LOGGED_IN:
            return state = action.payload;
        default:
            return state;
    }
}

export const setCurrentUser = (state=[], action) =>{
    switch(action.type){
        case ActionTypes.SET_CURRENT_USER:
            return state = action.payload;
        default:
            return state;
    }
        
}