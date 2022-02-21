import { ActionTypes } from "./action-types"

export const setExercisesList = (exercisesList) => {
    return {
        type: ActionTypes.GET_EXERCISES_LIST,
        payload: exercisesList,
    };
};

export const selectedExercise = (exercise) => {
    return {
        type: ActionTypes.SELECTED_EXERCISE,
        payload: exercise,
    };
};
