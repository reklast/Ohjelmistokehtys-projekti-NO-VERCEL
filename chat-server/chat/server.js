const express = require('express');
const bodyParser = require('body-parser');
const { OpenAIApi } = require('openai');

const app = express();
const port = process.env.PORT || 3000; // Use the specified port or default to 3000

app.use(bodyParser.json());

// Configure OpenAI API client
const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY, // Set your API key as an environment variable
});

// Define a route to interact with the OpenAI API
app.post('/generate-response', async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await openai.createCompletion({
      model: 'davinci',
      messages,
    });

    const botMessageText = response.choices[0].message.content;

    res.json({ botMessageText });
  } catch (error) {
    console.error('Error in generate-response:', error);
    res.status(500).json({ error: 'An error occurred while generating a response.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
