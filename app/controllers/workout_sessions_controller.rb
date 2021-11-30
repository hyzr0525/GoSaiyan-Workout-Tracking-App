class WorkoutSessionsController < ApplicationController

    def destroy
        workoutSession = WorkoutSession.find_by(id: params[:id])
        if workoutSession
        workoutSession.destroy
        else
        render json: {error: "Book not found"}, status: :not_found
        end
    end

    def index
        workoutSessions = current_user.workout_sessions.all
        render json: workoutSessions
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
        new_workout_session = WorkoutSession.new(workout_session_params)
        if WorkoutSession.save
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
        params.permit(:title, :weekday)
    end

end
