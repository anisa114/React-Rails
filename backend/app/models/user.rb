class User < ApplicationRecord
    has_many :responses
    has_many :surveys, through: :surveys_users
    has_secure_password

  validates :email, :password, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 8 }
end
