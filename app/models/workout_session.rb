class WorkoutSession < ApplicationRecord
  has_many :workout_logs, dependent: :destroy
  has_many :exercises, through: :workout_logs
  belongs_to :user
  validates :title, :weekday, :user_id, presence: true
end
