class DocumentSerializer < ActiveModel::Serializer
  attributes :id, :attachment
  has_one :client
end
