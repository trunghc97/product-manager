class Product < ApplicationRecord
  validates :name, presence: true, length: {maximum: 50}

  scope :order_decs, -> {order created_at: :desc}
end
