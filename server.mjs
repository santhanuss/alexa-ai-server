import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const GROQ_API_KEY = process.env.GROQ_API_KEY;

app.post("/ask", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.json({ answer: "No question received." });
  }

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content: "Answer clearly and briefly for voice assistants."
            },
            {
              role: "user",
              content: question
            }
          ],
          temperature: 0.5
        })
      }
    );

    const data = await response.json();

    if (!data.choices || !data.choices[0]) {
      console.error("Groq error:", data);
      return res.json({ answer: "AI failed to respond." });
    }

    res.json({ answer: data.choices[0].message.content });

  } catch (err) {
    console.error("Server error:", err);
    res.json({ answer: "Server error occurred." });
  }
});

app.listen(3000, () => {
  console.log("✅ FREE AI Server running on http://localhost:3000");
});
