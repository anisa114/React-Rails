class User < ApplicationRecord
    has_many :responses
    has_many :survey_users
    has_many :surveys, through: :survey_users
    has_secure_password
    validates :email, uniqueness: true

    def to_token_payload
        {
          sub: id,
          name: name
        }
    end
end
