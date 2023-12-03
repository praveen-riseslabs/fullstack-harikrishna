# Server Setup:

1. **Backend Framework :** Express.js
2. **Install Dependencies :** Navigate to the server(in our case Backend) project folder and run "npm i" this will install all necessary dependencies.
3. **Database Configuration :** The database used is MongoDB, Go to your MongoDB GUI and connect using "mongodb://localhost:27017" to see the changes.
4. **User Model :** The defined UserModel consist of: fullname (Minimum 3 characters), username (Minimum 3 characters), email (should be unique), phNo (Minimum 10 characters), password(Minimum 5 characters). `NOTE:` Since it is a small app password hashing is not used.  
5. **API Endpoints :** Implemented 3 endpoints. Login('/login'), Signup('/register') and Users('/users'). Login and Signup is a POST request and Users is a GET request which will fetch data from the database and displays it

# Client Setup:

1. **Frontend Framework :** React.js
2. **Install Dependencies :** Navigate to the client project folder and run "npm i" this will install all necessary dependencies.
3. **API Calls :** Used Axios to make API calls from the client to the server.
4. **Testing :** Data is being sent and received correctly and the errors are handled properly.