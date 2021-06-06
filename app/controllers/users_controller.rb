class UsersController < ApplicationController

  def index
    @users = { users: [{id: 1, name: 'minh'}] }
  end
end
