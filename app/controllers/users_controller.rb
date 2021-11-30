class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def show
        if current_user
        render json: current_user, status: :ok
        else
        render json: {error: "no active session"}, status: :unauthorized
        end
    end

    def create
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:username, :password, :weight)
    end
   
end
