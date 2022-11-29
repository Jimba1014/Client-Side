class SpecialistsController < ApplicationController
    def index
        render json: Specialist.all, status: :ok
    end

    def show
        render json: find_specialist, status: :ok
    end

    private

    def find_specialist
        Specialist.find(params[:id])
    end
end
