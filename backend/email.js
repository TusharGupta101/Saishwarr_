const nodemailer = require("nodemailer");

// Create transporter with Gmail SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Send contact form email
const sendContactEmail = async (formData) => {
  const transporter = createTransporter();
  
  const { name, email, phone, serviceType, message } = formData;
  
  // Format service type for better readability
  const serviceLabels = {
    engine: "Engine Repair",
    oil: "Oil Change",
    brake: "Brake Service",
    diagnostics: "Diagnostics",
    tire: "Tire Service",
    ac: "AC Repair",
    other: "Other Service"
  };
  
  const serviceLabel = serviceLabels[serviceType] || serviceType;
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "lawangeatharva@gmail.com",
    subject: `New Contact Form Submission - ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
          📨 New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #34495e; margin-top: 0;">Contact Details</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Email:</td>
              <td style="padding: 8px;">
                <a href="mailto:${email}" style="color: #3498db;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Phone:</td>
              <td style="padding: 8px;">
                <a href="tel:${phone}" style="color: #3498db;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Service Type:</td>
              <td style="padding: 8px;">
                <span style="background-color: #3498db; color: white; padding: 4px 12px; border-radius: 15px; font-size: 14px;">
                  ${serviceLabel}
                </span>
              </td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #ffffff; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <h3 style="color: #34495e; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div style="background-color: #e8f4f8; padding: 15px; border-radius: 8px; margin: 20px 0; font-size: 14px;">
          <p style="margin: 0; color: #2c3e50;">
            <strong>Submitted on:</strong> ${new Date().toLocaleString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        
        <div style="text-align: center; color: #7f8c8d; font-size: 12px;">
          <p style="margin: 0;">This email was sent from the contact form on Saishwar Automotive Industries website</p>
          <p style="margin: 5px 0 0 0;">Please respond to the customer as soon as possible</p>
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email: " + error.message);
  }
};

module.exports = { sendContactEmail };