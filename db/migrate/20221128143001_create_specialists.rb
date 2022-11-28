class CreateSpecialists < ActiveRecord::Migration[7.0]
  def change
    create_table :specialists do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
