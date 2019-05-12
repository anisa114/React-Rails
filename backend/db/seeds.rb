# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Creating users

user1 = User.create!(name: "Anisa", email: "anisa@hotmail.com", password_digest: "hello1")
user2 = User.create!(name: "Halima", email: "halima@hotmail.com", password_digest: "hello2")
user3 = User.create!(name: "Sarah", email: "sarah@hotmail.com", password_digest: "hello3")

# Creating Surveys
survey1 = Survey.create(name:"Epilepsy");
survey2 = Survey.create(name:"Arthritis");

# Creating Questions for Survey 1
question1 = Question.create(survey_id:1, text:"How long has it been since your last epileptic seizure?")
question2 = Question.create(survey_id:1, text:"How many seizures have you experienced during the past 4 weeks?")
question3 = Question.create(survey_id:1, text:"How many seizures have you experienced during the past 4 weeks?")
question4 = Question.create(survey_id:1, text:"How severe are you seizres?")
question5 = Question.create(survey_id:1, text:"What medication do you take and how often do you take it?")


# Creating Questions for Survey 2
question6 = Question.create(survey_id:2, text:"How long has it been since got diagnosed with Arthritis?")
question7 = Question.create(survey_id:2, text:"Do you experience pain? How severe is it?")
question8 = Question.create(survey_id:2, text:"How often do you visit the doctor?")
question9 = Question.create(survey_id:2, text:"Does the arthritis impede you from completing daily tasks? Please give an example?")
question10 = Question.create(survey_id:2, text:"What medication do you take and how often do you take it?")
    


