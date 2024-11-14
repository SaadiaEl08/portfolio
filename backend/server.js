import express, { json } from 'express';
import { send_email } from './Controller.js';
import cors from "cors"
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(json());
app.use(cors());

app.post('/send_email', (req, res) => {
    console.log('/send_email is triggered');
    send_email(req, res);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
