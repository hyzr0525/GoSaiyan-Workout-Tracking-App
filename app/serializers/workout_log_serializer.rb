class WorkoutLogSerializer < ActiveModel::Serializer
  attributes :id, :note, :set, :rep
  has_one :workout_session
  has_one :exercise
end
