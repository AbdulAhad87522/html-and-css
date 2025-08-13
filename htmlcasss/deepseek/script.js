// // document.getElementById("sendBtn").addEventListener("click", async () => {
// //   const promptText = document.getElementById("prompt").value;
// //   const responseEl = document.getElementById("response");
// //   responseEl.textContent = "Thinking...";

// //   const res = await fetch("/api/chat", {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify({ prompt: promptText })
// //   });

// //   const data = await res.json();
// //   responseEl.textContent = data.error || data.reply;
// // });


// document.getElementById("sendBtn").addEventListener("click", async () => {
//   const promptText = document.getElementById("prompt").value;
//   const responseEl = document.getElementById("response");
//   const button = document.getElementById("sendBtn");
  
//   // Disable button during request
//   button.disabled = true;
//   responseEl.textContent = "Thinking...";
  
//   try {
//     const res = await fetch("http://localhost:5000/api/chat", {  // Added full URL
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ prompt: promptText })
//     });

//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }
    
//     const data = await res.json();
//     responseEl.textContent = data.reply || data.error || "No response received";
//   } catch (error) {
//     console.error("Error:", error);
//     responseEl.textContent = `Error: ${error.message}`;
//   } finally {
//     button.disabled = false;
//   }
// });


document.getElementById("sendBtn").addEventListener("click", async () => {
  const promptText = document.getElementById("prompt").value;
  const responseEl = document.getElementById("response");
  const button = document.getElementById("sendBtn");
  
  if (!promptText.trim()) {
    responseEl.textContent = "Please enter a question or prompt";
    return;
  }

  button.disabled = true;
  responseEl.textContent = "Thinking...";
  
  try {
    // Changed to relative path that works with your HTML file location
    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: promptText })
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    responseEl.textContent = data.reply || "No response content";
  } catch (error) {
    console.error("Fetch Error:", error);
    responseEl.textContent = `Error: ${error.message}\n\nPlease ensure:\n1. The backend server is running\n2. You're not blocking CORS\n3. The API key is valid`;
  } finally {
    button.disabled = false;
  }
});