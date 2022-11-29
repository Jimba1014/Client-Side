class Specialist < ApplicationRecord
    has_many :clients
    has_many :appointments, through: :clients
    has_many :strategies, through: :clients
    has_many :rbts, through: :clients
    has_many :doctors, through: :clients
    has_many :h_appointments, through: :clients
end
