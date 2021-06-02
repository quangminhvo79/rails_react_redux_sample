class UsersController < ApplicationController
  before_action :set_user, only: %i[ show edit update destroy ]
  skip_before_action :verify_authenticity_token
  layout "hello_world"

  def index
    respond_to do |format|
      format.html { render :index }
      format.json { render json: { users: User.all.as_json } }
    end
  end

  def show
  end

  def new
    @user = User.new
  end

  def edit
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: {message: "User was successfully created." }, status: :created
    else
      render json: { message: @user.errors.full_messages }, status: :unprocessable_entity
    end

  end

  def update
    if @user.update(user_params)
      render json: {message: "User was successfully updated." }, status: :ok
    else
      render json: { message: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: "User was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email)
    end
end
