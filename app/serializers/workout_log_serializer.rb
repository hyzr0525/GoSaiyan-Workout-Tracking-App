class WorkoutLogSerializer < ActiveModel::Serializer
  attributes :id, :note, :set, :rep, :exercise_id, :workout_session_id
  # has_one :workout_session
  belongs_to :exercise
end
