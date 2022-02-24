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

export const getMuscleList = (musclesList) => {
    return{
        type: ActionTypes.GET_MUSCLES_LIST,
        payload: musclesList
    }
}

export const setLoggedIn = (boolean) => {
    return {
        type: ActionTypes.SET_LOGGED_IN,
        payload: boolean,
    }
}

export const setCurrentUser = (user) => {
    return {
        type: ActionTypes.SET_CURRENT_USER,
        payload: user,
    }
}

export const getUserWorkout = (workoutSession) => {
    return {
        type: ActionTypes.GET_USER_WORKOUTS,
        payload: workoutSession
    }
}

export const getSessionWorkouts = (workouts) => {
    return {
        type: ActionTypes.GET_SESSION_WORKOUTS,
        payload: workouts
    }
}