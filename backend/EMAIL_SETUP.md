# Email Setup Instructions

To enable email notifications for contact form submissions, you need to configure Gmail SMTP settings.

## Steps to Set Up Email:

1. **Enable 2-Factor Authentication** on your Gmail account:
   - Go to https://myaccount.google.com/security
   - Turn on 2-Step Verification

2. **Generate App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter a name like "Saishwar Automotive Website"
   - Copy the 16-character password that's generated

3. **Update .env file**:
   - Open `backend/.env`
   - Replace `your_email@gmail.com` with your actual Gmail address
   - Replace `your_app_password_here` with the app password you generated
   - Example:
     ```
     EMAIL_USER=myemail@gmail.com
     EMAIL_PASS=abcd efgh ijkl mnop
     ```

## Testing the Setup:

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. Fill out the contact form on your website
3. Check if email is received at lawangeatharva@gmail.com

## Troubleshooting:

- If emails aren't sending, check the server console for error messages
- Make sure the app password is correct (no spaces when entering)
- Ensure 2-Factor Authentication is enabled on your Gmail account
- Check that your Gmail account allows less secure apps (though app passwords should work)

## Security Notes:

- Never commit your .env file to version control
- Keep your app password secure
- The app password gives access only to email, not your full Google account