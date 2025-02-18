const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend Server is live!');
});

app.get('/signup', (req, res) => {
    res.send('Sign up Page');
});

app.post('/signup', (req, res) => {
    const { username, password, email, dateOfBirth } = req.body;

    if (!username || !password || !email) {
        return res.status(400).send("Please enter all fields");
    }

    if (password.length < 8 || password.length > 20) {  
        return res.status(400).send("Password must be between 8 and 20 characters");
    }

    
    res.status(201).json({
        message: "User signed up successfully",
        user: {
            username,
            email,
            dateOfBirth: dateOfBirth || "N/A" 
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

