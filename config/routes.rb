Rails.application.routes.draw do
  resources :appointments
  resources :clients
  resources :doctors
  resources :strategies
  resources :rbts
  resources :specialists
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
