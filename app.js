const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const hostname = require('os').hostname();

// Route for the home page
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head><title>Wild Rydes App</title></head>
            <body>
                <h1>Welcome to Patel Wild Rydes!</h1>
                <p>This is the Wild Rydes application running on ECS Fargate.</p>
                <p><strong>Server:</strong> ${hostname}</p>
            </body>
        </html>
    `);
});

// A simple health check endpoint
app.get('/health', (req, res) => {
    res.send('OK');
});

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
