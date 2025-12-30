\# Alexa AI Server 🤖🎙️



This is a Node.js Express server that powers an Alexa skill using AI.



\## Features

\- REST API endpoint for Alexa

\- Uses free AI model (Groq / OpenAI-compatible)

\- Secure via environment variables

\- Works with ngrok or public HTTPS



\## Run locally



```bash

npm install

node server.mjs

Server runs at:



http://localhost:3000



API

POST /ask

{

&nbsp; "question": "What is artificial intelligence?"

}





Response:



{

&nbsp; "answer": "AI is the ability of machines to think like humans..."

}



Author



Santhanuss 🚀





---





