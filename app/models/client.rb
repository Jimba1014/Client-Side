class Client < ApplicationRecord
  belongs_to :Specialist
  belongs_to :Rbt
  belongs_to :Doctor
  belongs_to :Strategy
end
