class Survey < ApplicationRecord
    has_many :questions
    has_many :users, through: :surveys_users
end
