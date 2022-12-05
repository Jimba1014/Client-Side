class SpecialistSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :password_digest
  has_many :clients
end
