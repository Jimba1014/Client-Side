class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :name, :practice, :address
end
