class SurveysController < ApplicationController
  before_action :authenticate_user
    def index
      id = current_user.id
        @user = User.find(id);
        name = @user.name
        @surveys= @user.surveys
        render :json =>  {
            :surveys => @surveys.as_json,
            :name => name.as_json}
      end
    def show 
        @survey = Survey.find params[:id]
        @questions = Question.where(survey_id: @survey.id)
        render :json =>  {
            :questions => @questions.as_json}
    end
end

