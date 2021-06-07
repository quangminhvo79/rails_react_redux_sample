class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def show
    render json: { user: User.find_by(id: params[:id]) }
  end

  def list
    render json: { users: User.all }
  end

  def create
    user = User.new(user_params)
    render json: { success: user.valid? && user.save, errors: user.errors.full_messages.join("<br>") }
  end

  def update
    user = User.find_by(id: params[:id])
    render json: { success: user.update(user_params), errors: user.errors.full_messages.join("<br>") }
  end

  def destroy
    user = User.find_by(id: params[:id])
    render json: { success: user.present? && user.destroy }
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :email)
  end
end
