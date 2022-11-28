class CreateClients < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :name
      t.belongs_to :specialist, null: false, foreign_key: true
      t.belongs_to :rbt, null: false, foreign_key: true
      t.belongs_to :doctor, null: false, foreign_key: true
      t.belongs_to :strategy, null: false, foreign_key: true
      t.string :parent_first
      t.string :parent_second
      t.string :parental_status
      t.string :home_address
      t.string :school_address

      t.timestamps
    end
  end
end
