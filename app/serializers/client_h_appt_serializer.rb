class ClientHApptSerializer < ActiveModel::Serializer
  attributes :id, :name, :parent_first, :parent_second, :parental_status, :home_address
end
