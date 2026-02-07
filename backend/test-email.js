// Test script to verify email functionality
const { sendContactEmail } = require("./email");

async function testEmail() {
  console.log("Testing email functionality...");
  
  const testData = {
    name: "Test User",
    email: "test@example.com",
    phone: "+91 98765 43210",
    serviceType: "engine",
    message: "This is a test message from the contact form.\n\nPlease ignore this email.\n\nThank you!"
  };
  
  try {
    const result = await sendContactEmail(testData);
    console.log("✅ Email sent successfully!");
    console.log("Message ID:", result.messageId);
  } catch (error) {
    console.error("❌ Email sending failed:", error.message);
    console.log("\nPlease check:");
    console.log("1. Your .env file has correct EMAIL_USER and EMAIL_PASS");
    console.log("2. You've enabled 2FA and generated an app password");
    console.log("3. The Gmail account allows SMTP access");
  }
}

// Only run if this file is executed directly
if (require.main === module) {
  testEmail();
}

module.exports = { testEmail };