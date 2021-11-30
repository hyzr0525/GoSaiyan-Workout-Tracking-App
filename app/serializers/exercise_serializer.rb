class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :desc
  has_one :muscle
end
