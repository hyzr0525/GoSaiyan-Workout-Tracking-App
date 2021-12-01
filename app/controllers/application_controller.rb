class ApplicationController < ActionController::API
  include ActionController::Cookies

  def current_user
    User.find_by(id: session[:user_id])
  end

  #def current_user
  # User.first
  #end
  
end
