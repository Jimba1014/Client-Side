class Appointment < ApplicationRecord
  belongs_to :Client
  belongs_to :Specialist
end
