class Users::SessionsController < Devise::SessionsController
  before_action :configure_sign_in_params, only: [:create]
  skip_before_action :verify_authenticity_token

  def new
    super
  end

  def create
    @user = User.find_by email: params[:session][:email]
    if @user
      sign_in @user
      render json: @products = {
                      data: Product.all.order_decs.as_json,
                      current_user: @user
                    }
    end

  end

  def destroy
    sign_out current_user
  end

  protected

  def configure_sign_in_params
    devise_parameter_sanitizer.permit :sign_in, keys: [:attribute]
  end
end
