class Api::SurveysController < ApplicationController
    def index
        @surveys = Survey.all
        render :json =>  {
            :surveys => @surveys.as_json}
      end
    def show 
        @survey = Survey.find params[:id]
        @questions = Question.where(survey_id: @survey.id)
        render :json =>  {
            :questions => @questions.as_json}
    end
end

