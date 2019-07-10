class Product < ApplicationRecord
  PRODUCT_ATTRIBUTES = %i(name price image)
  validates :name, presence: true, length: {maximum: 50}
  validates :price, numericality: true

  scope :order_decs, -> {order created_at: :desc}
end
