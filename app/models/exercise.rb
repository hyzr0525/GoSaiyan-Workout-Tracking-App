class Exercise < ApplicationRecord
  has_many :workout_logs, dependent: :destroy
  has_many :workout_sessions, through: :workout_logs, dependent: :destroy
  belongs_to :muscle
end
