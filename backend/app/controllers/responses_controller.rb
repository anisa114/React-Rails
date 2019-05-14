class ResponsesController < ApplicationController

    def index 
        @responses = Response.all
        render :json =>  {
            :responses => @responses.as_json}
    end 
        def create
            @response = Response.create!(
                user_id: params["user_id"],
                question_id: params["question_id"],
                text: params["text"]
            )
          end
        

end
