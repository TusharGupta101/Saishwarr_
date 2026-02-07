# Contact form backend (MySQL)

## Setup

1. **Install dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Create MySQL database and table**
   - Create a database and user, then run:
   ```bash
   mysql -u root -p < schema.sql
   ```
   Or run the contents of `schema.sql` in MySQL Workbench or your MySQL client.

3. **Configure environment**
   - Copy `.env.example` to `.env`
   - Edit `.env` with your MySQL credentials:
   ```
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=saishwars
   ```

4. **Start the server**
   ```bash
   npm start
   ```
   The API runs at `http://localhost:3000`. The server also serves the project files (contact.html, etc.) from the parent folder, so open `http://localhost:3000/contact.html` to use the form.

## If you serve HTML from somewhere else

Set the API base URL before the form script. In `contact.html`, add before `main.js`:
```html
<script>window.CONTACT_API_BASE = "http://localhost:3000";</script>
```
Replace with your backend URL if different.
