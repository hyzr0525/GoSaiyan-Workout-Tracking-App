class ExercisesController < ApplicationController

    def index
        exercises = Exercise.all
        render json: exercises
    end

    def show
        exercise = Exercise.find_by(id: params[:id])
        if exercise
        render json: exercise
        else
        render json: {error: "exercise not found"}, status: :not_found
        end
    end

end
