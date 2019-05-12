class Question < ApplicationRecord
  belongs_to :survey
  has_one :response
end
