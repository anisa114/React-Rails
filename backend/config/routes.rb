Rails.application.routes.draw do
  
  post '/login' => 'sessions#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope :api do
    post 'user_token' => 'user_token#create'
    resources :surveys, :responses
  end
end


