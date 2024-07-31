<h1>Job Portal</h1>
    <p>A robust job portal application that allows users to sign up, log in, browse job listings, and manage their profiles. Built with Node.js, Express, MongoDB, and EJS, this platform offers secure user authentication and a user-friendly interface for job seekers.</p>

  <h2>Table of Contents</h2>
    <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#environment-variables">Environment Variables</a></li>
        <li><a href="#folder-structure">Folder Structure</a></li>
        <li><a href="#routes">Routes</a></li>
        <li><a href="#dependencies">Dependencies</a></li>
        <li><a href="#license">License</a></li>
    </ul>

  <h2 id="features">Features</h2>
    <ul>
        <li><strong>User Authentication</strong>: Secure sign-up, login, and logout functionalities using bcrypt for password hashing.</li>
        <li><strong>Session Management</strong>: Express session-based authentication to maintain user sessions.</li>
        <li><strong>Job Listings</strong>: Users can view job listings, apply for jobs, and view job details.</li>
        <li><strong>User Profile</strong>: Users can view their profiles, which include personal information and job application history.</li>
        <li><strong>Dynamic Rendering</strong>: Uses EJS templating for rendering dynamic content based on user sessions.</li>
        <li><strong>Static File Serving</strong>: Serves static HTML files for various sections like home, about us, contact, etc.</li>
    </ul>

  <h2 id="installation">Installation</h2>
    <h3>Prerequisites</h3>
    <ul>
        <li>Node.js (v14.x or later)</li>
        <li>MongoDB (local or Atlas)</li>
    </ul>

  <h3>Steps</h3>
    <ol>
        <li><strong>Clone the Repository</strong>
            <pre><code>git clone https://github.com/your-username/job-portal.git
cd job-portal</code></pre>
        </li>
        <li><strong>Install Dependencies</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Set Up Environment Variables</strong>
            <p>Create a <code>.env</code> file in the root of your project and add the following environment variables:</p>
            <pre><code>PORT=5000
MONGODB_USERNAME=yourMongoDBUsername
MONGODB_PASSWORD=yourMongoDBPassword
SESSION_KEY=yourSessionSecretKey</code></pre>
        </li>
        <li><strong>Run the Application</strong>
            <pre><code>npm start</code></pre>
        </li>
        <li><strong>Access the Application</strong>
            <p>Open your browser and go to <a href="http://localhost:5000" target="_blank">http://localhost:5000</a>.</p>
        </li>
    </ol>

  <h2 id="usage">Usage</h2>
    <ul>
        <li><strong>Sign Up</strong>: Create a new account by providing your first name, last name, phone number, and password.</li>
        <li><strong>Login</strong>: Log in using your phone number and password.</li>
        <li><strong>Profile Management</strong>: View your profile and update your details.</li>
        <li><strong>Job Search</strong>: Browse and apply for job listings.</li>
        <li><strong>Logout</strong>: Securely log out from your session.</li>
    </ul>

  <h2 id="environment-variables">Environment Variables</h2>
    <p>The application uses the following environment variables:</p>
    <ul>
        <li><code>PORT</code>: The port number on which the server runs.</li>
        <li><code>MONGODB_USERNAME</code>: Your MongoDB username for connecting to the database.</li>
        <li><code>MONGODB_PASSWORD</code>: Your MongoDB password for connecting to the database.</li>
        <li><code>SESSION_KEY</code>: A secret key used for session encryption.</li>
    </ul>

  <h2 id="folder-structure">Folder Structure</h2>
    <pre><code>job-portal/
├── public/
│   ├── about.html
│   ├── blog.html
│   ├── candidate.html
│   ├── contact.html
│   ├── employee.html
│   ├── home.html
│   ├── jobapply.html
│   ├── jobdetails.html
│   ├── jobgrid.html
│   ├── loginpage.html
│   ├── profile.html
│   └── css/        # CSS files
├── views/
│   └── profile.ejs
├── .env            # Environment variables
├── server.js       # Main server file
├── package.json    # Node.js dependencies and scripts
└── README.md       # Project documentation</code></pre>

  <h2 id="routes">Routes</h2>
    <ul>
        <li><code>GET /</code>: Displays the login page.</li>
        <li><code>GET /signin</code>: Displays the login page.</li>
        <li><code>GET /signup</code>: Displays the signup page.</li>
        <li><code>GET /home</code>: Displays the home page after successful login.</li>
        <li><code>GET /profile</code>: Displays the user profile.</li>
        <li><code>POST /login</code>: Handles user login.</li>
        <li><code>POST /signup</code>: Handles new user registration.</li>
        <li><code>GET /signout</code>: Logs the user out and destroys the session.</li>
        <li><code>GET /contact</code>: Displays the contact page.</li>
        <li><code>GET /about-us</code>: Displays the about us page.</li>
        <li><code>GET /employee</code>: Displays the employee section.</li>
        <li><code>GET /blog</code>: Displays the blog section.</li>
        <li><code>GET /candidate</code>: Displays the candidate section.</li>
        <li><code>GET /job-apply</code>: Displays the job application page.</li>
        <li><code>GET /job-grid</code>: Displays the job grid.</li>
        <li><code>GET /job-details</code>: Displays the job details.</li>
    </ul>

  <h2 id="dependencies">Dependencies</h2>
    <ul>
        <li><strong>Express</strong>: Web framework for Node.js.</li>
        <li><strong>Mongoose</strong>: ODM (Object Data Modeling) library for MongoDB.</li>
        <li><strong>Body-Parser</strong>: Middleware for parsing request bodies.</li>
        <li><strong>Express-Session</strong>: Middleware for session management.</li>
        <li><strong>dotenv</strong>: Module for loading environment variables from <code>.env</code>.</li>
        <li><strong>bcrypt</strong>: Library for hashing passwords.</li>
        <li><strong>EJS</strong>: Embedded JavaScript templating engine.</li>
    </ul>
