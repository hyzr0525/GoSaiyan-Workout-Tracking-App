class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :desc
  has_one :muscle
  # has_many :workout_logs

end
