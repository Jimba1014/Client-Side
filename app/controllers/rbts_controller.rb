class RbtsController < ApplicationController
    def index
        render json: Rbt.all, status: :ok
    end

    def show
        render json: find_rbt, status: :ok
    end

    def create
        render json: Rbt.create!(rbt_params), status: :created
    end

    def destroy
        find_rbt.destroy
        head :no_content
    end

    private

    def find_rbt
        Rbt.find(params[:id])
    end

    def rbt_params
        params.permit(:first_name, :last_name)
    end
end
