import { ActionTypes } from "./action-types"

export const getExercisesList = (exercisesList) => {
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

export const filterByMuscles = (muscleGroup) => {
    return {
        type: ActionTypes.FILTER_BY_MUSCLES,
        payload: muscleGroup,
    };
};
