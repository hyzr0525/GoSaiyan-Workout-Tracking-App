Rails.application.routes.draw do
  
  resources :workout_logs, only:[:show, :index, :create, :destroy, :update]
  resources :exercises, only:[:show, :index]
  resources :workout_sessions, only:[:show, :create, :index, :destroy, :update]
  resources :muscles, only:[:show, :index]
  resources :users, only:[:index, :show, :create]
  
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
