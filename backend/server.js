const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const allowedOrigins = [process.env.FRONTEND_URL];
const connectDB = require('./config/db');
const { setupSocket } = require('./services/notificationService');

// Load environment variables from .env file

// Connect to MongoDB database
connectDB();

const app = express();
const server = http.createServer(app);

// Configure CORS for Socket.IO
// Replace with your frontend URL in production
console.log('Allowed Origins:', allowedOrigins);
const io = new Server(server, {
    cors: {
        origin: [
            process.env.FRONTEND_URL, 
            'http://localhost:5173', 
        ],
        methods: ["GET", "POST"]
    }
});

const corsOptions = {
    origin: function (origin, callback) {
        console.log('REQUEST ORIGIN:', origin);
        console.log('ALLOWED ORIGINS:', allowedOrigins);
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

// Pass the 'io' instance to the notification service
setupSocket(io);

// Middleware
app.use(cors(corsOptions)); // Enable CORS for all routes
app.use(express.json()); // Allow server to accept JSON in request body

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/jobs', require('./routes/jobRoutes'));

// Define a simple root route for testing
app.get('/', (req, res) => {
    res.send('Job Tracker API is running...');
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));