import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Save to storage
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification
      try {
        await sendContactEmail(validatedData);
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Continue even if email fails - we saved the submission
      }
      
      res.json({ success: true, id: submission.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  // Get contact submissions (admin endpoint)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Failed to get submissions:", error);
      res.status(500).json({ error: "Failed to get submissions" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

async function sendContactEmail(data: any) {
  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'graceswlim@gmail.com',
      pass: process.env.EMAIL_PASSWORD || process.env.GMAIL_APP_PASSWORD
    }
  });

  const emailHtml = `
    <h2>New Catering Inquiry from Grace's Catering Website</h2>
    <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    ${data.eventDate ? `<p><strong>Event Date:</strong> ${data.eventDate}</p>` : ''}
    ${data.guestCount ? `<p><strong>Guest Count:</strong> ${data.guestCount}</p>` : ''}
    ${data.eventType ? `<p><strong>Event Type:</strong> ${data.eventType}</p>` : ''}
    ${data.message ? `<p><strong>Message:</strong><br>${data.message.replace(/\n/g, '<br>')}</p>` : ''}
    <hr>
    <p><em>This inquiry was submitted through the Grace's Catering website contact form.</em></p>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER || 'graceswlim@gmail.com',
    to: 'graceswlim@gmail.com',
    subject: `New Catering Inquiry from ${data.firstName} ${data.lastName}`,
    html: emailHtml
  };

  await transporter.sendMail(mailOptions);
}
