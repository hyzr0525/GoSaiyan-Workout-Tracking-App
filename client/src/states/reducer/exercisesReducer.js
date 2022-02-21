import { ActionTypes } from "../action/action-types"

const initialState = {}

export const exercisesList = (state=initialState, action) => {
    switch(action.type){
        case ActionTypes.GET_EXERCISES_LIST:
            return state;
        case ActionTypes.SELECTED_EXERCISE:
            return state;
        default:
            return state;
    }
}