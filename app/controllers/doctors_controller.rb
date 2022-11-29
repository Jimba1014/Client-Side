class DoctorsController < ApplicationController
    def index
        render json: Doctor.all, status: :ok
    end

    def show
        render json: find_doctor, status: :ok
    end

    def create
        render json: doctor_params, status: :created
    end

    private

    def find_doctor
        Doctor.find(params[:id])
    end

    def doctor_params
        params.permit(:name, :practice, :address)
    end
end
