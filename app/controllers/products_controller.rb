class ProductsController < ApplicationController
  def index
    @products = Product.all.order_decs.to_json
  end

  def create
    Product.create product_params
    render json: @products = Product.all.order_decs.to_json
  end

  private

  def product_params
    params.require(:product).permit Product::PRODUCT_ATTRIBUTES
  end
end
