class Survey < ApplicationRecord
    has_many :questions
    has_many :survey_users
    has_many :users, through: :survey_users
end
