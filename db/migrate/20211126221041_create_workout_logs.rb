class CreateWorkoutLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :workout_logs do |t|
      t.text :note
      t.integer :set
      t.integer :rep
      t.belongs_to :workout_session, null: false, foreign_key: true
      t.belongs_to :exercise, null: false, foreign_key: true

      t.timestamps
    end
  end
end
