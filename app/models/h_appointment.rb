class HAppointment < ApplicationRecord
  belongs_to :client
  belongs_to :specialist

  validates_presence_of :client_id, :specialist_id, :date_time
end
