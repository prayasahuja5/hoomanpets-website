import { Resend } from 'resend'
import { NextResponse } from 'next/server'

// Initialize Resend (you'll need to add RESEND_API_KEY to your environment variables)
const resend = new Resend(process.env.RESEND_API_KEY || 'your-resend-api-key')

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Send welcome email
    const { data, error } = await resend.emails.send({
      from: 'Hooman Pets <welcome@hoomanpets.com>', // Update with your verified domain
      to: [email],
      subject: '🐾 Welcome to the Hooman Pets Waitlist!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Hooman Pets!</title>
        </head>
        <body style="font-family: 'Urbanist', -apple-system, BlinkMacSystemFont, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #F5EDE2;">
          
          <div style="background: linear-gradient(135deg, #F5EDE2 0%, #F8F1E8 50%, #F2E6DA 100%); padding: 40px 30px; border-radius: 20px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="margin-bottom: 30px;">
              <h1 style="color: #000; font-size: 28px; font-weight: bold; margin: 0; letter-spacing: -0.5px;">
                🐾 Welcome to the Pack!
              </h1>
              <p style="color: #666; font-size: 16px; margin: 10px 0 0 0;">
                You're now on the Hooman Pets waitlist
              </p>
            </div>

            <!-- Main Content -->
            <div style="background: rgba(255,255,255,0.8); backdrop-filter: blur(10px); padding: 30px; border-radius: 15px; margin: 20px 0; border: 1px solid rgba(255,255,255,0.3);">
              
              <div style="font-size: 60px; margin-bottom: 20px;">🚀</div>
              
              <h2 style="color: #333; font-size: 24px; margin: 0 0 15px 0; font-weight: 600;">
                Get Ready for Something Amazing
              </h2>
              
              <p style="color: #666; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
                Ezra, our AI companion, is learning fast and getting smarter every day. 
                Soon, you'll experience pet care like never before — intelligent, personalized, 
                and designed with love for you and your furry friend.
              </p>

              <!-- Feature Preview -->
              <div style="background: linear-gradient(45deg, #f8f9ff, #f0f4ff); padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid #3b82f6;">
                <h3 style="color: #333; font-size: 18px; margin: 0 0 10px 0; font-weight: 600;">
                  What's Coming:
                </h3>
                <ul style="color: #666; text-align: left; margin: 0; padding-left: 20px;">
                  <li style="margin-bottom: 8px;">🧠 AI-powered pet health insights</li>
                  <li style="margin-bottom: 8px;">📱 Smart care reminders and tracking</li>
                  <li style="margin-bottom: 8px;">🏥 Connect with trusted veterinarians</li>
                  <li style="margin-bottom: 8px;">👥 Join a community of pet lovers</li>
                </ul>
              </div>

              <!-- Beta Launch Date -->
              <div style="background: linear-gradient(45deg, #1f2937, #374151); color: white; padding: 20px; border-radius: 12px; margin: 25px 0;">
                <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">
                  🗓️ Beta Launch Target
                </h3>
                <p style="margin: 0; font-size: 18px; font-weight: bold; color: #60a5fa;">
                  August 1st, 2025
                </p>
                <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.9;">
                  We'll notify you the moment it's ready!
                </p>
              </div>

            </div>

            <!-- Call to Action -->
            <div style="margin-top: 30px;">
              <p style="color: #666; font-size: 14px; margin: 0 0 20px 0;">
                Follow our journey and stay updated:
              </p>
              
              <div style="margin: 20px 0;">
                <a href="#" style="display: inline-block; background: linear-gradient(45deg, #1f2937, #374151); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; margin: 0 10px 10px 0; font-size: 14px;">
                  🌐 Visit Website
                </a>
                <a href="#" style="display: inline-block; background: linear-gradient(45deg, #3b82f6, #1d4ed8); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: 600; margin: 0 10px 10px 0; font-size: 14px;">
                  📧 Contact Us
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(0,0,0,0.1);">
              <p style="color: #999; font-size: 12px; margin: 0;">
                This email was sent to ${email} because you joined our waitlist.<br>
                Hooman Pets © 2025 - Making pet parenting smarter, one tail wag at a time.
              </p>
            </div>

          </div>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Email API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 