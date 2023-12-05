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