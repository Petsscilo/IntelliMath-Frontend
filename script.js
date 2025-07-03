document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
  
    if (loginForm) {
      loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
  
        const formData = new FormData(loginForm);
        const data = Object.fromEntries(formData.entries());
  
        try {
          const res = await fetch("http://localhost:8000/api/auth/jwt/create/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
  
          const result = await res.json();
  
          if (res.ok) {
            localStorage.setItem("token", result.access);
            localStorage.setItem("username", data.username);
            alert("Login successful!");
  
            // Redirect will be handled based on role after backend setup
            window.location.href = "dashboard.html";
          } else {
            alert("Login failed: " + JSON.stringify(result));
          }
        } catch (error) {
          alert("⚠️ Error: " + error.message);
        }
      });
    }
  });
  
  // Handle forgot password form
document.addEventListener("DOMContentLoaded", () => {
    const forgotForm = document.getElementById("forgotForm");
  
    if (forgotForm) {
      forgotForm.addEventListener("submit", async (e) => {
        e.preventDefault();
  
        const formData = new FormData(forgotForm);
        const data = Object.fromEntries(formData.entries());
  
        try {
          const response = await fetch("http://localhost:8000/api/auth/users/reset_password/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
  
          const result = await response.json();
          if (response.ok) {
            alert("📩 Reset link sent! Check your email.");
          } else {
            alert("❌ Failed to send reset link: " + JSON.stringify(result));
          }
        } catch (err) {
          alert("⚠️ Error: " + err.message);
        }
      });
    }
  });
  

  // Handle Reset Password Form
document.addEventListener("DOMContentLoaded", () => {
    const resetForm = document.getElementById("resetForm");
  
    if (resetForm) {
      resetForm.addEventListener("submit", async (e) => {
        e.preventDefault();
  
        const formData = new FormData(resetForm);
        const data = Object.fromEntries(formData.entries());
  
        try {
          const response = await fetch("http://localhost:8000/api/auth/users/reset_password_confirm/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
  
          const result = await response.json();
  
          if (response.ok) {
            alert("✅ Password reset successfully!");
            window.location.href = "login.html";
          } else {
            alert("❌ Failed: " + JSON.stringify(result));
          }
        } catch (err) {
          alert("⚠️ Error: " + err.message);
        }
      });
    }
  });

      //ai bot
  document.addEventListener("DOMContentLoaded", () => {
    const chatForm = document.getElementById("chatForm");
    const chatBox = document.getElementById("chatBox");
    const chatInput = document.getElementById("chatInput");
  
    chatForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const question = chatInput.value.trim();
      if (!question) return;
  
      // Show user question
      const userMsg = document.createElement("div");
      userMsg.innerHTML = `<strong>You:</strong> ${question}`;
      chatBox.appendChild(userMsg);
  
      // Typing animation placeholder
      const aiTyping = document.createElement("div");
      aiTyping.className = "typing text-green-600";
      aiTyping.textContent = "AI is typing";
      chatBox.appendChild(aiTyping);
  
      chatInput.value = "";
      chatBox.scrollTop = chatBox.scrollHeight;
  
      // Simulate delay
      setTimeout(async () => {
        // Remove typing
        chatBox.removeChild(aiTyping);
  
        // 🚀 Replace this with your backend API endpoint
        // Example: await fetch("http://localhost:8000/api/ask", { method: "POST", body: JSON.stringify({ question }) })
  
        // Simulated response:
        const aiReply = `This is a simulated response to: "${question}"`;
  
        const aiMsg = document.createElement("div");
        aiMsg.innerHTML = `<strong>AI:</strong> ${aiReply}`;
        aiMsg.className = "text-green-700";
        chatBox.appendChild(aiMsg);
  
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 1500); // Simulate delay for typing
    });
  });
  
  