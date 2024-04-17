const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(express.json()); // For parsing application/json
app.use(cors()); // Enables CORS for all routes and origins

// If you need to limit CORS to specific origins in production, you can configure it like this:
 app.use(cors({
   origin: ['http://localhost:3000']  // Adjust according to your frontend's URL
 }));

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in your environment variables
});
const openai = new OpenAIApi(configuration);

app.post('/generate-text', async (req, res) => {
  try {
    const response = await openai.Completion.create({
      model: "text-davinci-003",
      prompt: req.body.prompt,
      max_tokens: 150,
    });
    res.json({ result: response.data.choices[0].text });
  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
