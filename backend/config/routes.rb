Rails.application.routes.draw do
  post '/login' => 'sessions#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :surveys, :responses
  end
end


