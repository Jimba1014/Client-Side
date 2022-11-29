class HAppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date_time
  has_one :client, serializer: ClientHApptSerializer
  has_one :specialist, serializer: SpecialistClientSerializer
end
