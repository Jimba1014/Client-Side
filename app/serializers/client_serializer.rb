class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :parent_first, :parent_second, :parental_status, :home_address, :school_address
  has_one :Specialist
  has_one :Rbt
  has_one :Doctor
  has_one :Strategy
end
