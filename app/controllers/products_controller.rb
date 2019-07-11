class ProductsController < ApplicationController
  def index
    @products = Product.all.order_decs.to_json
  end

  def create
    Product.create product_params
    render json: @products = Product.all.order_decs.to_json
  end

  def update
    product = Product.find_by id: params[:id]
    product.update product_params
    render json: @products = Product.all.order_decs.to_json
  end

  def destroy
    product = Product.find_by id: params[:id]
    product.destroy
    render json: @products = Product.all.order_decs.to_json
  end

  private

  def product_params
    params.require(:product).permit Product::PRODUCT_ATTRIBUTES
  end
end
