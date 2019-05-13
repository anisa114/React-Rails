Rails.application.routes.draw do
  get 'surveys/index'
  get 'surveys/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :surveys, :responses
    post 'user/token' => 'user_token#create'
    get 'users/current' => 'users#current'
  end
end


