class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    #for login feature
    def create
        user = Specialist.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:specialist_id] = user.id
            render json: user
        else
            render json: {errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    #for logout feature
    def destroy
        session.delete :specialist_id
        head :no_content
    end
end
