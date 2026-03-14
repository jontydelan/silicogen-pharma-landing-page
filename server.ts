import express from 'express';
import { createServer as createViteServer } from 'vite';
import { Resend } from 'resend';
import path from 'path';

const app = express();
app.use(express.json());
const PORT = 3000;

let resendClient: Resend | null = null;

function getResend(): Resend {
  if (!resendClient) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error('RESEND_API_KEY environment variable is required');
    }
    resendClient = new Resend(key);
  }
  return resendClient;
}

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY is missing. Simulating email send.');
      return res.json({ 
        success: true, 
        simulated: true,
        message: 'Email simulated successfully. (Set RESEND_API_KEY in Secrets to send real emails)'
      });
    }

    const resend = getResend();
    
    const submissionTime = new Date().toLocaleString();
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'delan.axis@gmail.com',
      subject: `New Contact Form Submission: ${subject} [${submissionTime}]`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(400).json({ error: error.message });
    }

    res.json({ success: true, data });
  } catch (error: any) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: error.message || 'Failed to send email' });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
