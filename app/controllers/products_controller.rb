class ProductsController < ApplicationController
  def index
    @products = Product.all.order_decs.to_json
  end
end
