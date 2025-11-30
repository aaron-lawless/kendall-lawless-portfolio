# EmailJS Setup Instructions

To enable email functionality in your contact form, follow these steps:

## 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

## 2. Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection instructions
5. Copy the **Service ID**

## 3. Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use these template variables in your email template:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email address

Example template:
```
From: {{from_name}} ({{from_email}})
Subject: {{subject}}

{{message}}
```

4. Save the template and copy the **Template ID**

## 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (or API Key)
3. Copy it

## 5. Update the Contact Form

Open `src/pages/contact/Contact.tsx` and replace the placeholder values:

```typescript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

Also update the recipient email:
```typescript
to_email: 'your-email@example.com',       // Replace with your email
```

## 6. Test Your Form

1. Run your development server
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email inbox

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email templates
- 1 email service

For higher limits, consider upgrading to a paid plan.

## Troubleshooting

- Make sure your email service is connected properly
- Check that all IDs and keys are correct
- Verify your template variables match the form data
- Check the browser console for error messages
