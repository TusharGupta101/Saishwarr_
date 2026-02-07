require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sendContactEmail } = require("./email");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(".."));

app.post("/api/contact", async (req, res) => {
  console.log("Received contact form submission:", req.body);
  const { name, email, phone, serviceType, message } = req.body;

  if (!name || !email || !phone || !serviceType || !message) {
    console.log("Missing required fields");
    return res.status(400).json({
      success: false,
      error: "Missing required fields: name, email, phone, serviceType, message",
    });
  }

  try {
    // Send email notification
    await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      serviceType: serviceType.trim(),
      message: message.trim()
    });
        
    res.status(201).json({
      success: true,
      message: "Your message has been sent. We will get back to you soon.",
    });
  } catch (err) {
    console.error("Contact submission error:", err);
    res.status(500).json({
      success: false,
      error: "Failed to send your message. Please try again or contact us by phone.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});