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

ActiveRecord::Schema.define(version: 2021_11_26_221041) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "exercises", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.text "desc"
    t.bigint "muscle_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["muscle_id"], name: "index_exercises_on_muscle_id"
  end

  create_table "muscles", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "weight"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "workout_logs", force: :cascade do |t|
    t.text "note"
    t.integer "set"
    t.integer "rep"
    t.bigint "workout_session_id", null: false
    t.bigint "exercise_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["exercise_id"], name: "index_workout_logs_on_exercise_id"
    t.index ["workout_session_id"], name: "index_workout_logs_on_workout_session_id"
  end

  create_table "workout_sessions", force: :cascade do |t|
    t.string "title"
    t.string "weekday"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_workout_sessions_on_user_id"
  end

  add_foreign_key "exercises", "muscles"
  add_foreign_key "workout_logs", "exercises"
  add_foreign_key "workout_logs", "workout_sessions"
  add_foreign_key "workout_sessions", "users"
end
