Rails.application.routes.draw do
  resources :h_appointments
  resources :appointments
  resources :clients
  resources :doctors
  resources :strategies
  resources :rbts
  resources :specialists
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"

  # Signup
  post "/signup", to: "specialist#create"
  get "/me", to: "specialists#me"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
