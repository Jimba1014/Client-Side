class ClientsController < ApplicationController

    def index
        render json: Client.all, status: :ok, Serializer: SpecialistClientSerializer
    end

    def show
        render json: find_client, status: :ok
    end

    def create
        render json: Client.create!(client_params), status: :created
    end

    def destroy
        find_client.destroy
        head :no_content
    end

    private

    def find_client
        Client.find(params[:id])
    end

    def client_params
        params.permit(:name, :specialist_id, :rbt_id, :doctor_id, :strategy_id, :parent_first, :parent_second, :parental_status, :home_address, :school_address)
    end
end
