import express, { json } from 'express';
import { send_email } from './Controller.js';
import cors from "cors"
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(json());
app.use(cors());
// Middleware to serve the React build folder
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// Fallback to React for unknown routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/dist', 'index.html'));
});

app.post('/send_email', (req, res) => {
    console.log('/send_email is triggered');
    send_email(req, res);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
