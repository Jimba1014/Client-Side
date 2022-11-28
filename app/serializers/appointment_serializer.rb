class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date_time
  has_one :client
  has_one :specialist
end
