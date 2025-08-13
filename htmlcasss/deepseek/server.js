// // const express = require("express");
// // const { Configuration, OpenAIApi } = require("openai");
// // const app = express();
// // app.use(express.json());

// // // 🔹 Use environment variable for safety instead of hardcoding
// // const config = new Configuration({
// //   apiKey: process.env.DEEPSEEK_API_KEY || "sk-84b92d735379434194a4f816be76d5ac",
// //   basePath: "https://api.deepseek.com/v1"
// // });

// // const openai = new OpenAIApi(config);

// // app.post("/api/chat", async (req, res) => {
// //   try {
// //     const prompt = req.body.prompt;

// //     const response = await openai.createChatCompletion({
// //       model: "deepseek-v3", // 🔹 Faster model
// //       messages: [
// //         { role: "system", content: "You are a helpful code assistant. Keep answers short and clear." },
// //         { role: "user", content: prompt }
// //       ],
// //       temperature: 0.7, // adjust creativity
// //       max_tokens: 500   // limits response size to keep speed high
// //     });

// //     const reply = response.data.choices[0].message.content;
// //     res.json({ reply });

// //   } catch (err) {
// //     console.error("Error calling DeepSeek API:", err);
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));

// const express = require("express");
// const axios = require("axios"); // Changed from openai package to axios
// const app = express();
// app.use(express.json());

// // Enable CORS
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

// const DEEPSEEK_API_KEY = "sk-84b92d735379434194a4f816be76d5ac"; // Replace with env var in production

// app.post("/api/chat", async (req, res) => {
//   try {
//     const prompt = req.body.prompt;

//     const response = await axios.post(
//       "https://api.deepseek.com/v1/chat/completions",
//       {
//         model: "deepseek-chat",
//         messages: [
//           { role: "system", content: "You are a helpful assistant." },
//           { role: "user", content: prompt }
//         ],
//         temperature: 0.7,
//         max_tokens: 2000
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${DEEPSEEK_API_KEY}`
//         }
//       }
//     );

//     const reply = response.data.choices[0].message.content;
//     res.json({ reply });

//   } catch (err) {
//     console.error("DeepSeek API Error:", err.response?.data || err.message);
//     res.status(500).json({ 
//       error: "Failed to get response",
//       details: err.response?.data || err.message 
//     });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

const express = require("express");
const axios = require("axios");
const cors = require("cors");  // Add this package

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

const DEEPSEEK_API_KEY = "sk-84b92d735379434194a4f816be76d5ac";

app.post("/api/chat", async (req, res) => {
  try {
    console.log("Received prompt:", req.body.prompt); // Log the incoming prompt

    const response = await axios.post(
      "https://api.deepseek.com/v1/chat/completions",
      {
        model: "deepseek-chat",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: req.body.prompt }
        ],
        temperature: 0.7,
        max_tokens: 2000
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${DEEPSEEK_API_KEY}`
        },
        timeout: 30000 // 30 seconds timeout
      }
    );

    console.log("API Response:", response.data); // Log the API response
    res.json({ reply: response.data.choices[0].message.content });

  } catch (err) {
    console.error("API Error:", {
      message: err.message,
      response: err.response?.data,
      stack: err.stack
    });
    
    res.status(500).json({ 
      error: "Failed to get response from DeepSeek API",
      details: err.response?.data || err.message 
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Test endpoint: POST http://localhost:${PORT}/api/chat`);
});