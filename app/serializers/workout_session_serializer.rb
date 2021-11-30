class WorkoutSessionSerializer < ActiveModel::Serializer
  attributes :id, :title, :weekday
  has_one :user
end
