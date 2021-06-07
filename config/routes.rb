Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "users#index"
  get '/create', to: "users#index"
  resources :users, only: [:index, :show, :create, :update, :destroy] do
    collection do
      get :list
    end
  end
end
