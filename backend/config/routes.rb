Rails.application.routes.draw do
  get 'surveys/index'
  get 'surveys/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :surveys, :responses
  end
end


