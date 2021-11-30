class User < ApplicationRecord
    has_many :workout_sessions, dependent: :destroy
    has_secure_password
    validates :username, :password, :weight, presence: true
    validates :username, uniqueness: true
end
