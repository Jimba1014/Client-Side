class StrategiesController < ApplicationController
    def index
        render json: Strategy.all, status: :ok
    end

    def show
        render json: find_strat, status: :ok
    end

    def create
        render json: strat_params, status: :created
    end

    private

    def find_strat
        Strategy.find(params[:id])
    end

    def strat_params
        params.permit(:name, :description)
    end
end
