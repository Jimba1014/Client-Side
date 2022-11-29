class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date_time
  has_one :client, serializer: ClientApptSerializer
  has_one :specialist, serializer: SpecialistClientSerializer
end
