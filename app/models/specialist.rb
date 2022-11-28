class Specialist < ApplicationRecord
    has_secure_password
    has_many :clients
    has_many :appointments
    has_many :rbts, through: :clients
    has_many :strategies, through: :clients
    has_many :doctors, through: :clients
end
