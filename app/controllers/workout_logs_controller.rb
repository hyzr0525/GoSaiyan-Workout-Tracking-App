class WorkoutLogsController < ApplicationController

    def index
        workoutLog = WorkoutLog.all
        render json: workoutLog
    end

    def show
        workoutLog = WorkoutLog.find_by(id: params[:id])
        if workoutLog
        render json: workoutLog
        else
        render json: {error: "workoutLog not found"}, status: :not_found
        end
    end

    def create
        workoutLog = WorkoutLog.create(workout_log_params)
        if workoutLog.valid?
            render json: workoutLog, status: :ok
        else
            render json: workoutLog.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        workoutLog = WorkoutLog.find_by(id: params[:id])
        if workoutLog
            workoutLog.update(workout_log_params)
            render json: workoutLog
        else
            render json: {error: "WorkoutLog not found"}, status: :not_found
        end
    end

    def destroy
        workoutLog = WorkoutLog.find_by(id: params[:id])
        if workoutLog
         wo_session = workoutLog.workout_session
         workoutLog.destroy
         render json: wo_session
        else
        render json: {error: "Workout session not found"}, status: :not_found
        end
    end

    private

    def workout_log_params
        params.permit(:note, :set, :rep, :exercise_id, :workout_session_id)
    end
end
