class ProductsController < ApplicationController
  def index
    @products = {
      data: Product.all.order_decs.as_json,
      current_user: current_user || ''
    }
  end

  def create
    Product.create product_params
    if current_user
      render json: @products = {
                      data: Product.all.order_decs.as_json,
                      current_user: current_user || ''
                    }
    else
      render json: @products = {
                      data: Product.all.order_decs.as_json,
                      current_user: current_user || ''
                    }
    end

  end

  def update
    product = Product.find_by id: params[:id]
    product.update product_params
    render json: @products = {
                    data: Product.all.order_decs.as_json,
                    current_user: current_user || ''
                  }
  end

  def destroy
    product = Product.find_by id: params[:id]
    product.destroy
    render json: @products = {
                    data: Product.all.order_decs.as_json,
                    current_user: current_user || ''
                  }
  end

  private

  def product_params
    params.require(:product).permit Product::PRODUCT_ATTRIBUTES
  end
end
