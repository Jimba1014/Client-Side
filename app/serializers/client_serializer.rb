class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :parent_first, :parent_second, :parental_status, :home_address, :school_address
  has_one :specialist, serializer: SpecialistClientSerializer
  has_one :rbt
  has_one :doctor
  has_one :strategy
  has_many :appointments
  has_many :h_appointments
end
