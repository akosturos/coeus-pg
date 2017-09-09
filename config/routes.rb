Rails.application.routes.draw do
  get 'sessions/new'

  get 'users/new'

#see http://guides.rubyonrails.org/routing.html
  root 'static_pages#index'

  get '/contact', to: 'static_pages#contact'
  get '/about', to: 'static_pages#about'
  get '/team', to: 'static_pages#team'
  get '/projects', to: 'static_pages#projects'

  get '/signup', to: 'users#new'
  post '/signup', to: 'users#create'
  resources :users

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'


end

