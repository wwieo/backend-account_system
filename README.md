# Backend Account System

**Notice: The current version is at branch dev now.**

* With using restfulAPI, you can reach the function as like:
    * Account system: register/login/update/find
    * Friend system: friend/check/block/unfriend/unblock
  
## To do list

#### 1) Add .env file, which needs to communicate with MYSQL

* .env file includes:
    * DB_PORT= (MYSQL port you set)
    * DB_HOST= (MYSQL host you set)
    * DB_USER= (MYSQL user)
    * DB_PASS= (MYSQL password)
    * APP_PORT= (this project's port you want to set)


#### 2) Something should be install

* Create 2 databases in your MYSQL manually:
    * systemPractice: the main database this project runs.
    * systemPracticeTest: the test database this project runs with unit test.
  
Finally install the npm package:
```
npm i
```
  
Then you can run this project by the command below:
```
node app.js
```
  
api router list is in app.js & ./api/router/   
  
The complete backend api should be:  
(your_host):(your_app_port)/api/(app.js_router)/(function router you want to use)  
  
e.g:  
If I want to get a user data, I can use:  
[Get] localhost:3000/api/users/:user_name