class Client < ApplicationRecord
  belongs_to :specialist
  belongs_to :rbt
  belongs_to :doctor
  belongs_to :strategy
  has_many :appointments
end
