class User < ApplicationRecord
    has_many :responses
    has_many :surveys, through: :surveys_users
end
