class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.belongs_to :client, null: false, foreign_key: true
      t.belongs_to :specialist, null: false, foreign_key: true
      t.datetime :date_time

      t.timestamps
    end
  end
end
