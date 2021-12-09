class WorkoutSessionsController < ApplicationController

    def destroy
        workoutSession = WorkoutSession.find_by(id: params[:id])
        if workoutSession
        user_workout_sessions = current_user.workout_sessions
        workoutSession.destroy
        render json: user_workout_sessions
        else
        render json: {error: "Workout session not found"}, status: :not_found
        end
    end

    def index
        
        workoutSessions = current_user.workout_sessions
        render json: workoutSessions, status: :ok
    end

    def show
        user_workout_session = current_user.workout_sessions.find_by(id: params[:id])
        
        if user_workout_session
        render json: user_workout_session
        else
        render json: {error: "workout session not found"}, status: :not_found
        end
    end

    def create
        new_workout_session = current_user.workout_sessions.new(workout_session_params)
        if new_workout_session.save
            render json: new_workout_session, status: :ok
        else
            render json: new_workout_session.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        workoutSession = WorkoutSession.find_by(id: params[:id])
        if workoutSession
            workoutSession.update(workout_session_params)
            render json: workoutSession
        else
            render json: {error: "Workout session not found"}, status: :not_found
        end
    end

    private

    def workout_session_params
        params.permit(:title, :weekday, :user_id)
    end

end
