class HAppointmentsController < ApplicationController

    def index
        render json: HAppointment.all, status: :ok
    end

    def show
        render json: find_h_appt, status: :ok
    end

    def create
        render json: HAppointment.create!(h_appointment_params), status: :created
    end

    def destroy
        find_h_appt.destroy
        head :no_content
    end

    private

    def find_h_appt
        HAppointment.find(params[:id])
    end

    def h_appointment_params
        params.permit(:client_id, :specialist_id, :date_time)
    end
end
