# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_11_28_143734) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.bigint "client_id", null: false
    t.bigint "specialist_id", null: false
    t.datetime "date_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_appointments_on_client_id"
    t.index ["specialist_id"], name: "index_appointments_on_specialist_id"
  end

  create_table "clients", force: :cascade do |t|
    t.string "name"
    t.bigint "specialist_id", null: false
    t.bigint "rbt_id", null: false
    t.bigint "doctor_id", null: false
    t.bigint "strategy_id", null: false
    t.string "parent_first"
    t.string "parent_second"
    t.string "parental_status"
    t.string "home_address"
    t.string "school_address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["doctor_id"], name: "index_clients_on_doctor_id"
    t.index ["rbt_id"], name: "index_clients_on_rbt_id"
    t.index ["specialist_id"], name: "index_clients_on_specialist_id"
    t.index ["strategy_id"], name: "index_clients_on_strategy_id"
  end

  create_table "doctors", force: :cascade do |t|
    t.string "name"
    t.string "practice"
    t.string "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rbts", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "specialists", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "strategies", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "appointments", "clients"
  add_foreign_key "appointments", "specialists"
  add_foreign_key "clients", "doctors"
  add_foreign_key "clients", "rbts"
  add_foreign_key "clients", "specialists"
  add_foreign_key "clients", "strategies"
end
