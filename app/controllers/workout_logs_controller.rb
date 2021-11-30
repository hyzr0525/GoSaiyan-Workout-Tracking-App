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
        workoutLog = WorkoutLog.new(workout_log_params)
        if WorkoutLog.save
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

    private

    def workout_log_params
        params.permit(:note, :set, :rep)
    end
end
