# NexTalk

NexTalk is a real-time chat application built with a modern full-stack architecture. It features user authentication, real-time messaging, profile management, and a responsive UI with theme support. The application consists of a React frontend and a Node.js/Express backend with Socket.io for real-time communication.

## Features

- **Real-time Messaging**: Instant messaging with Socket.io for seamless communication
- **User Authentication**: Secure login and signup with JWT tokens and password hashing
- **Profile Management**: Update user profiles with avatar uploads via Cloudinary
- **Responsive Design**: Mobile-friendly UI built with Tailwind CSS and DaisyUI
- **Theme Support**: Multiple themes including light and dark modes
- **Message History**: Persistent chat history stored in MongoDB
- **Online Status**: Real-time user presence indicators
- **File Uploads**: Support for image uploads in messages
- **Error Handling**: Comprehensive error handling and user feedback with toast notifications

## Tech Stack

### Frontend
- **React 19**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Component library for Tailwind CSS
- **React Router**: Client-side routing
- **Zustand**: Lightweight state management
- **Axios**: HTTP client for API requests
- **Socket.io-client**: Real-time communication
- **Lucide React**: Icon library
- **React Hot Toast**: Toast notifications

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database with Mongoose ODM
- **Socket.io**: Real-time bidirectional communication
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing
- **Cloudinary**: Image upload and management
- **CORS**: Cross-origin resource sharing

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or cloud service like MongoDB Atlas)
- **Git**

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/NexTalk.git
   cd NexTalk
   ```

2. **Install server dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd ../client
   npm install
   ```

## Environment Variables

Create `.env` files in both `client` and `server` directories.

### Server (.env in server/)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLIENT_URL=http://localhost:5173
```

### Client (.env in client/)
```
VITE_API_URL=http://localhost:5000/api
```

## Running the Application

1. **Start the server:**
   ```bash
   cd server
   npm run dev
   ```
   The server will run on `http://localhost:5000`

2. **Start the client:**
   ```bash
   cd client
   npm run dev
   ```
   The client will run on `http://localhost:5173`

3. Open your browser and navigate to `http://localhost:5173`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `PUT /api/auth/update-profile` - Update user profile

### Messages
- `GET /api/messages/users` - Get all users for chat
- `GET /api/messages/:id` - Get messages with a specific user
- `POST /api/messages/send/:id` - Send a message to a user

## Project Structure

```
NexTalk/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Zustand stores
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility libraries
│   │   └── routes/        # Routing configuration
│   ├── package.json
│   └── vite.config.js
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── lib/           # Utility libraries
│   │   ├── middlewares/   # Express middlewares
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   └── server.js      # Main server file
│   └── package.json
└── README.md
```

## Building for Production

### Client
```bash
cd client
npm run build
```

### Server
```bash
cd server
npm run start
```

## Deployment

### Frontend (Vercel)
The client is configured for deployment on Vercel. Use the `vercel.json` file for configuration.

### Backend
Deploy the server to a platform like Heroku, Railway, or DigitalOcean. Ensure environment variables are set in your deployment environment.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Socket.io](https://socket.io/) - Real-time application framework
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Cloudinary](https://cloudinary.com/) - Image and video management</content>
<parameter name="filePath">/home/rishabh-singh-dhami/dev/py/NexTalk/README.md