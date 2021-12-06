class WorkoutSessionSerializer < ActiveModel::Serializer
  attributes :id, :title, :weekday
  has_one :user
  # has_many :exercises
  has_many :workout_logs
  
end
