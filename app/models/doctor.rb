class Doctor < ApplicationRecord

    validates_presence_of :name, :practice, :address
end
