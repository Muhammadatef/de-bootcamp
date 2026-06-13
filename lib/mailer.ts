import { Resend } from "resend";
import type { ApplicationData } from "@/lib/validations/application";

const apiKey = process.env.RESEND_API_KEY;

/** Resend client. Null when no API key is configured (local dev). */
export const resend = apiKey ? new Resend(apiKey) : null;

export interface SendArgs {
  data: ApplicationData;
  cv: { filename: string; content: Buffer } | null;
  cvUrl?: string | null;
}

/**
 * Sends the notification email (to Fahmi, with CV attached) and the
 * confirmation email (to the applicant). When RESEND_API_KEY is missing, the
 * application is logged to the console and the function resolves successfully
 * so the site stays usable in local development.
 */
export async function sendApplicationEmails({ data, cv, cvUrl }: SendArgs): Promise<void> {
  const fromEmail = process.env.FROM_EMAIL || "applications@mafbootcamp.com";
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  if (!resend || !notificationEmail) {
    console.warn(
      "[mailer] RESEND_API_KEY or NOTIFICATION_EMAIL not set — logging application instead of sending email."
    );
    console.info("[mailer] New application:", {
      ...data,
      cv: cv?.filename ?? null,
      cvUrl: cvUrl ?? null,
    });
    return;
  }

  const attachments = cv ? [{ filename: cv.filename, content: cv.content }] : undefined;

  // Notification to Fahmi (with CV attached).
  await resend.emails.send({
    from: fromEmail,
    to: notificationEmail,
    replyTo: data.email,
    subject: `🚀 New Application: ${data.fullName} — DE Bootcamp Cohort 01`,
    html: buildNotificationEmail(data, cvUrl ?? null),
    attachments,
  });

  // Confirmation to the applicant.
  await resend.emails.send({
    from: fromEmail,
    to: data.email,
    subject: "✅ Application Received — DE Bootcamp Cohort 01",
    html: buildConfirmationEmail(data.fullName),
  });
}

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildNotificationEmail(data: ApplicationData, cvUrl: string | null): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, sans-serif; background: #0a0a0f; color: #e2e8f0; margin: 0; padding: 20px; }
    .card { background: #0d0d1a; border: 1px solid #1e293b; border-radius: 12px; padding: 24px; margin-bottom: 16px; }
    .label { color: #64748b; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 4px; }
    .value { color: #e2e8f0; font-size: 15px; margin-bottom: 16px; }
    .motivation { background: #0d1117; border-left: 3px solid #00d4ff; padding: 16px; border-radius: 0 8px 8px 0; color: #94a3b8; line-height: 1.7; }
    h1 { color: #00d4ff; font-size: 22px; margin: 0 0 8px; }
    a { color: #00d4ff; }
  </style>
</head>
<body>
  <h1>🚀 New Bootcamp Application</h1>
  <p style="color:#64748b">Cohort 01 · Data Engineering Bootcamp</p>

  <div class="card">
    <div class="label">Full Name</div>
    <div class="value">${esc(data.fullName)}</div>

    <div class="label">Email</div>
    <div class="value"><a href="mailto:${esc(data.email)}">${esc(data.email)}</a></div>

    <div class="label">Phone (WhatsApp)</div>
    <div class="value">${esc(data.phone)}</div>

    <div class="label">Nationality</div>
    <div class="value">${esc(data.nationality)}</div>

    <div class="label">City</div>
    <div class="value">${esc(data.city)}</div>

    <div class="label">Current Status</div>
    <div class="value">${esc(data.status)}</div>
  </div>

  <div class="card">
    <div class="label">Technical Background</div>
    <div class="value">
      🐍 Python: <strong>${esc(data.pythonLevel)}</strong><br/>
      🗃️ SQL: <strong>${esc(data.sqlLevel)}</strong><br/>
      🐧 Linux: <strong>${esc(data.linuxLevel)}</strong>
    </div>
  </div>

  <div class="card">
    <div class="label">Goal After Bootcamp</div>
    <div class="value">${esc(data.goal)}</div>

    <div class="label">Motivation</div>
    <div class="motivation">${esc(data.motivation)}</div>
  </div>

  <div class="card">
    <div class="label">Commitment & Availability</div>
    <div class="value">
      Commit for 4 months: <strong>${esc(data.commit4Months)}</strong><br/>
      Available 5+ hrs/week: <strong>${esc(data.available5Hours)}</strong><br/>
      Ready for time & effort: <strong>${esc(data.timeEffort)}</strong><br/>
      Comfortable in English: <strong>${esc(data.englishComfortable)}</strong>
    </div>

    <div class="label">About the Applicant</div>
    <div class="motivation">${esc(data.aboutYou)}</div>
  </div>

  ${
    data.linkedin || data.github || cvUrl
      ? `
  <div class="card">
    <div class="label">Links</div>
    ${data.linkedin ? `<div class="value">LinkedIn: <a href="${esc(data.linkedin)}">${esc(data.linkedin)}</a></div>` : ""}
    ${data.github ? `<div class="value">GitHub: <a href="${esc(data.github)}">${esc(data.github)}</a></div>` : ""}
    ${cvUrl ? `<div class="value">CV (stored): <a href="${esc(cvUrl)}">${esc(cvUrl)}</a></div>` : ""}
  </div>
  `
      : ""
  }

  <p style="color:#334155; font-size:12px; margin-top:32px;">
    CV is attached to this email if uploaded.
    Submitted at: ${new Date().toISOString()}
  </p>
</body>
</html>
  `;
}

export function buildConfirmationEmail(name: string): string {
  const firstName = esc(name.split(" ")[0] ?? name);
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, sans-serif; background: #0a0a0f; color: #e2e8f0; margin: 0; padding: 40px 20px; }
    .container { max-width: 560px; margin: 0 auto; }
    h1 { color: #00d4ff; font-size: 28px; margin-bottom: 8px; }
    p { color: #94a3b8; line-height: 1.7; }
    .highlight { color: #e2e8f0; font-weight: 600; }
    .footer { color: #334155; font-size: 12px; margin-top: 40px; border-top: 1px solid #1e293b; padding-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>✅ Got it, ${firstName}!</h1>
    <p>Your application for <span class="highlight">DE Bootcamp Cohort 01</span> has been received.</p>
    <p>
      We review all applications personally and get back to serious candidates
      within <span class="highlight">3–5 business days</span> via email or WhatsApp.
    </p>
    <p>
      In the meantime, you can explore the learning resources to get a head start.
      The more prepared you come in, the more you'll get out.
    </p>
    <p>
      If you have any questions, reply to this email directly.
    </p>
    <p style="margin-top:32px;">
      Good luck,<br/>
      <span class="highlight">Mohamed Atef Fahmy</span><br/>
      Senior Data Engineer · DE Bootcamp Abu Dhabi
    </p>
    <div class="footer">
      This is an automated confirmation. Do not reply unless you have a question.
    </div>
  </div>
</body>
</html>
  `;
}
