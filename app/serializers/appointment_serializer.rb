class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date_time
  has_one :Client
  has_one :Specialist
end
