// server.js
const express = require('express');
const { google } = require('googleapis');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors middleware
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3001; // Backend will run on port 3001

// Middleware
app.use(bodyParser.json()); // To parse JSON bodies from incoming requests
// Configure CORS to allow requests from your React frontend
// IMPORTANT: Replace 'http://localhost:5173' with your actual frontend URL when deploying
app.use(cors({
    origin: 'http://localhost:5173' // Allow requests from your Vite development server
}));

// Google Sheets API configuration
// These values are read from your .env file
const GOOGLE_SHEETS_PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY; // Removed JSON.parse()
const GOOGLE_SHEETS_CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

// Check if essential environment variables are set
if (!GOOGLE_SHEETS_PRIVATE_KEY || !GOOGLE_SHEETS_CLIENT_EMAIL || !GOOGLE_SHEET_ID) {
    console.error('ERROR: Google Sheets API credentials are not fully configured.');
    console.error('Please ensure GOOGLE_SHEETS_PRIVATE_KEY, GOOGLE_SHEETS_CLIENT_EMAIL, and GOOGLE_SHEET_ID are set in your .env file.');
    // Optionally, exit the process if credentials are missing
    // process.exit(1);
}

// Authenticate with Google Sheets API using a service account
const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: GOOGLE_SHEETS_PRIVATE_KEY, // Use the string directly
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'], // Scope for reading/writing to Google Sheets
});

const sheets = google.sheets({ version: 'v4', auth });

// API endpoint for contact form submission
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
        // Prepare row data to append to the sheet
        const row = [name, email, message, new Date().toLocaleString()]; // Add timestamp

        // Append row to the Google Sheet
        await sheets.spreadsheets.values.append({
            spreadsheetId: GOOGLE_SHEET_ID,
            range: 'Sheet1!A:D', // Assuming your sheet has columns A, B, C, D (Name, Email, Message, Timestamp)
            valueInputOption: 'USER_ENTERED', // How input data should be interpreted
            resource: {
                values: [row], // Array of rows to append
            },
        });

        console.log('Form data successfully written to Google Sheet.');
        res.status(200).json({ success: true, message: 'Message sent successfully!' });

    } catch (error) {
        console.error('Error writing to Google Sheet:', error.message);
        // Log the full error for debugging
        if (error.response) {
            console.error('Google API Error Response Data:', error.response.data);
        }
        res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
    }
});

// Basic route for testing the server
app.get('/', (req, res) => {
    res.send('Node.js backend for portfolio is running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
