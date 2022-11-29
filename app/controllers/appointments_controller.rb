class AppointmentsController < ApplicationController

    def index
        render json: Appointment.all, status: :ok
    end

    def show
        render json: find_appt, status: :ok
    end

    def create
        render json: appointment_params, status: :created
    end

    def destroy
        find_appt.destroy
        head :no_content
    end

    private

    def find_appt
        Appointment.find(params[:id])
    end

    def appointment_params
        params.permit(:client_id, :specialist_id, :date_time)
    end
end
