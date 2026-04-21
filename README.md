🎬 MovieApp Frontend
By DigitalWitch | Cloud • DevOps • Security

📌 Overview
This project is the frontend application for the Netflix-style platform. It connects to the backend API and provides the user interface for interacting with the system.

The frontend should be deployed on a separate Ubuntu server from the backend.

⚙️ Prerequisites
Before running the frontend application, make sure the following are installed on your Ubuntu server:

Node.js
npm
🐧 Install Node.js and npm on Ubuntu
Update your package list and install Node.js and npm:

sudo apt update -y
sudo apt install nodejs -y
sudo apt install npm -y
Verify the installation
node -v
npm -v

🚀 Getting Started
1. Clone the frontend repository
git clone https://github.com/{your-frontend-repository}.git
cd {your-frontend-folder}
2. Install all project dependencies
Run the following command to install all required packages from package.json:

npm install
Or simply:

npm i

🔗 Configure the Backend API
Before starting the frontend, update the API configuration so it points to your backend server.

File to edit
src/api/axiosConfig.js
Update the file with your backend details
import axios from 'axios';

export default axios.create({
    baseURL: 'http://{your-backend-url}',
    headers: {
        'Content-Type': 'application/json',
    },
});
Example
Replace:

http://{your-backend-url}:8080
With your actual backend URL, for example:

http://192.168.1.10:8080
or

http://your-domain.com
▶️ Run the Frontend Application
After installing dependencies and updating the backend URL, start the frontend server:

npm start
🌍 Access the Application
Once the application is running, it will usually be available at:

http://localhost:3000
If the frontend is hosted on a remote Ubuntu server, access it using the server IP address:

http://<server-ip>:3000
✅ Important Notes
Make sure the backend server is already running and accessible.
Confirm that the backend URL in axiosConfig.js is correct.
Ensure port 3000 is open on the frontend server.
If your backend uses a custom port such as 8080, make sure that port is also open.
Use HTTPS in production environments for better security.
💡 Optional Improvement
For better flexibility, you can use an environment variable instead of hardcoding the backend URL.

Example .env file:

REACT_APP_API_URL=https://your-backend-url/api
Then update axiosConfig.js like this:

import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
📦 Summary
Frontend setup steps:

Install Node.js and npm on a separate Ubuntu server
Clone the frontend repository
Run npm install or npm i
Edit src/api/axiosConfig.js and add your backend URL
Run npm start
