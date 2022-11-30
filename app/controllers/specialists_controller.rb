class SpecialistsController < ApplicationController

    def index
        render json: Specialist.all, status: :ok
    end

    def show
        render json: find_specialist, status: :ok
    end

    def me
        render json: @current_user
    end

    def create
        user = Specialist.create!(specialist_params)
        session[:specialist_id] = user.id
        render json: user, status: :created
    end

    private

    def find_specialist
        Specialist.find(params[:id])
    end

    def specialist_params
        params.permit(:first_name, :last_name, :username, :password)
    end
end
