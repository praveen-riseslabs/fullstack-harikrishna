# Initial Setup:

1. **Install Node.js :** Node.js is an open-source, cross-platform JavaScript runtime environment. You can download Node.js from the official website at https://nodejs.org/en/download/ or use your system's package manager.

   Check Node.js and npm Installation:
   Open a terminal (or command prompt on Windows) and run the following command to ensure Node.js is installed correctly:

   ![image](https://github.com/praveen-riseslabs/fullstack-harikrishna/assets/105783562/ba324b0b-4d47-464a-a6e5-5cdd8b98bcc3)

   [ NOTE : npm comes with Node.js by default, you don't have to install it separately ]

2. **Install MongoDB :** MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. You can download MongoDB from the official website at https://www.mongodb.com/try/download/community

   Inorder to run MongoDB locally you need to have MongoDB Shell installed on your computer. You can download MongoDB Shell from the official website at https://www.mongodb.com/try/download/shell

   Check MongoDB Installation:
   Open a terminal (or command prompt on Windows) and run the following command to ensure MongoDB is installed correctly:

   ![image](https://github.com/praveen-riseslabs/fullstack-harikrishna/assets/105783562/e4cf4fc1-60d8-43c9-9e09-9039430b25fe)

3. **Install MongoDB Compass :** You can download MongoDB Compass from the official website at https://www.mongodb.com/try/download/compass

   
5. **Fill in the Credentials :**

   1. Navigate to Backend/index.js, at line number 123 and 129 put your email id.
   2. At line number 124 put your app password (You can get your app password from google account settings)
   3. Change the from email (line number 128) if needed


# Server Setup:

1. **Backend Framework :** Express.js
2. **Install Dependencies :** Navigate to the server(in our case Backend) project folder and run "npm i" this will install all necessary dependencies.
3. **Database Configuration :** The database used is MongoDB, Go to your MongoDB GUI and connect using "mongodb://localhost:27017" to see the changes.
4. **User Model :** The defined UserModel consist of: fullname (Minimum 3 characters), username (Minimum 3 characters), email (should be unique), phNo (Minimum 10 characters), password(Minimum 5 characters) and gender.
5. **API Endpoints :** Implemented 5 endpoints. Login('/login'), Signup('/register'), Dashboard('/dashboard'), ForgotPassword('/forgot-password') and ResetPassword('/reset-password'). Login and Signup is a POST request. Dashboard is also a POST request, which will send a token and fetch data from the database corresponding to that token. ForgotPassword is a POST request which will compare the email that the user entered and the one with the database, if the user is authenticated using a valid token then a password reset link will be sent to the email. ResetPassword will take the token and verifies the user, if verified, will re redirected to password resetting page, and the password will be updated.

# Client Setup:

1. **Frontend Framework :** React.js
2. **Install Dependencies :** Navigate to the client project folder and run "npm i" this will install all necessary dependencies.
3. **API Calls :** Used Axios to make API calls from the client to the server.
4. **Testing :** Data is being sent and received correctly and the errors are handled properly.

# Starting the Application:

1. Open the terminal (or command prompt on Windows) from the root of the project directory folder (or if you are using VS Code, you can use its terminal) and run the following command to start front-end of the application :
   ### `npm start`
3. Open another terminal and navigate to the Backend folder by executing the following command:
   
   ![image](https://github.com/praveen-riseslabs/fullstack-harikrishna/assets/105783562/91c0e2df-5d5c-4cd6-96dc-c672264a514c)

4. Run the following to start the back-end of the application :
   ### `nodemon .\index.js`
6. Open MongoDB Compass and press connect there, you can see the changes in the database. By default the Database is 'Registration'

   1. If you want to change the Database, Create a new one from MongoDB Compass
   2. Copy its connection string
   3. Paste it in line number 25 (Backend/index.js)

# Packages Used:

1. **Axios :** Used to make HTTP requests
2. **Bcrypt :** For password hashing
3. **CORS :** Enable cross-origin requests with various options
5. **Express-Validator :** For form validation
6. **Mongoose :** Acts as a front end to MongoDB
7. **React Router :** For routing
8. **EJS :** To embed JavaScript code directly into the HTML templates
9. **JWT :** Used for an user authentication
10. **Nodemailer :** To send emails from server
11. **React-Draggable :** For making elements draggable
12. **React Infinite Scroll :** To implement infinite scrolling