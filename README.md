### SelfCare Survey

This is a simple application designed to allow patients to answer surveys related to their condition. Users can login and see their assigned surveys.
Users can then submit responses for the survey questions which then will be saved in the database.

### Dependencies

- psql
- rails
- react
- react-router
- activerecord
- axios
- knock
- jwt
- bcrypt
- foreman

### Getting Started

- Update the database.yml file with your correct local information
- cd into backend folder and install all dependencies (using the bundle install command)
- Run the migrations ``` rake db:migrate ```
- Run the seed``` rake db:seed ```
- cd into client folder and install all dependencies (using the npm install command)
- Run the development web server using 'rake start' command from the backend folder

### Sample Login Credentials

```
User1:
email: anisa@gmail.com
User2:
email: john@gmail.com
User3:
email: sarah@gmail.com

All passwords:
pass_good
```

### Screenshots

!["Screenshot of login page"](https://github.com/anisa114/React-Rails/blob/master/docs/login.png)
!["Screenshot of home page "](https://github.com/anisa114/React-Rails/blob/master/docs/home.png)
!["Screenshot of survey page "](https://github.com/anisa114/React-Rails/blob/master/docs/survey.png)

```

```
