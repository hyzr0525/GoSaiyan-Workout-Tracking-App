class MusclesController < ApplicationController

    def index
        muscles = Muscle.all
        render json: muscles
    end

    def show
        muscle = Muscle.find_by(id: params[:id])
        if muscle
        render json: muscle
        else
        render json: {error: "Muscle group not found"}, status: :not_found
        end
    end


end
