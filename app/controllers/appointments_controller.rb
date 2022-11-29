class AppointmentsController < ApplicationController

    def index
        render json: Appointment.all, status: :ok
    end

    def show
        render json: find_appt, status: :ok
    end

    def create

    end

    private

    def find_appt
        Appointment.find(params[:id])
    end
end
