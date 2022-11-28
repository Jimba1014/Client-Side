class CreateDoctors < ActiveRecord::Migration[7.0]
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :practice
      t.string :address

      t.timestamps
    end
  end
end
