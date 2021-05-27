# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @users_props = { users: [{ name: "Stranger1" }, { name: "Stranger2" }, { name: "Stranger3" }] }
  end
end
