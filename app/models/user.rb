class User < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, format: /\A[^@\s]+@[^@\s]+\z/
end
