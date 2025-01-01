# MyCalendar - Backend

**MyCalendar** backend is built to support the frontend calendar application, handling all server-side operations, like auth, communication logging, and data management.

---

## 🚀 Features

- RESTful API for managing user and admin functionalities.
- CRUD operations for companies and communications.
- Notifications for overdue and due communications.

---

## 🛠️ Tech Stack

- **Node.js**: Runtime environment for executing JavaScript on the server.
- **Express.js**: Web framework for building REST APIs.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: Object data modeling (ODM) library for MongoDB.
- **date-fns**: For date manipulation and formatting.

---

## ⚙️ Setup Instructions

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or above)
- **npm** or **yarn**
- **MongoDB**

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/mycalendar-backend.git
   cd mycalendar-backend
   ```

2. **Install Dependencies**  
   Use npm or yarn to install the required dependencies.

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a `.env` file in the root of your project and add the following:

   ```env
   PORT=3500
   MONGO_URI=mongodb://localhost:27017/mycalendar
   ```

   Replace `MONGO_URI` with your MongoDB connection string if different.

4. **Run the Application**
   ```bash
   node app.js
   or
   npm run dev (if nodemon is installed)
   ```
   The server will run at `http://localhost:3500/`.

---

You can save this as `README.md` in your backend repository. Replace placeholders like `your-username` with your actual GitHub username or any specific details as needed.
