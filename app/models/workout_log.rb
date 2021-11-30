class WorkoutLog < ApplicationRecord
  belongs_to :workout_session
  belongs_to :exercise
  validates :rep, :set, :workout_session_id, :exercise_id, presence: true
end
