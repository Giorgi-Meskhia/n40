const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Email validation function
function isValidEmail(email) {
    // Basic email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Additional checks
    if (!email || typeof email !== 'string') {
        return false;
    }
    
    // Check if email matches regex pattern
    if (!emailRegex.test(email)) {
        return false;
    }
    
    // Check for minimum length
    if (email.length < 5) {
        return false;
    }
    
    // Check for maximum length (RFC 5321)
    if (email.length > 254) {
        return false;
    }
    
    // Check for valid domain structure
    const parts = email.split('@');
    if (parts.length !== 2) {
        return false;
    }
    
    const [localPart, domain] = parts;
    
    // Check local part
    if (localPart.length === 0 || localPart.length > 64) {
        return false;
    }
    
    // Check domain
    if (domain.length === 0 || domain.length > 253) {
        return false;
    }
    
    // Check if domain has at least one dot
    if (!domain.includes('.')) {
        return false;
    }
    
    return true;
}

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Email Validator API',
        version: '1.0.0',
        endpoints: {
            'GET /': 'API information',
            'POST /validate': 'Validate email address',
            'GET /validate/:email': 'Validate email address via URL parameter'
        }
    });
});

// POST endpoint for email validation
app.post('/validate', (req, res) => {
    const { email } = req.body;
    
    if (!email) {
        return res.status(400).json({
            success: false,
            error: 'Email address is required'
        });
    }
    
    const isValid = isValidEmail(email);
    
    res.json({
        success: true,
        email: email,
        isValid: isValid,
        message: isValid ? 'Email is valid' : 'Email is invalid'
    });
});

// GET endpoint for email validation via URL parameter
app.get('/validate/:email', (req, res) => {
    const { email } = req.params;
    
    if (!email) {
        return res.status(400).json({
            success: false,
            error: 'Email address is required'
        });
    }
    
    const isValid = isValidEmail(email);
    
    res.json({
        success: true,
        email: email,
        isValid: isValid,
        message: isValid ? 'Email is valid' : 'Email is invalid'
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        error: 'Something went wrong!'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        error: 'Endpoint not found'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Email Validator API is running on port ${PORT}`);
    console.log(`Server started at: ${new Date().toISOString()}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
    console.log(`API documentation: http://localhost:${PORT}/`);
});

// Export for testing
module.exports = { app, isValidEmail };
