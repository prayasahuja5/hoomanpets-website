-- Supabase Database Setup for Waitlist
-- Run this SQL in your Supabase SQL Editor

-- Create the waitlist_signups table
CREATE TABLE IF NOT EXISTS waitlist_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist_signups(email);

-- Create an index on timestamp for sorting
CREATE INDEX IF NOT EXISTS idx_waitlist_timestamp ON waitlist_signups(timestamp);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow insertions (for signup)
CREATE POLICY "Allow public insert" ON waitlist_signups
FOR INSERT TO anon
WITH CHECK (true);

-- Create a policy to allow reading (if you need to display count, etc.)
CREATE POLICY "Allow public read" ON waitlist_signups
FOR SELECT TO anon
USING (true);

-- Create the newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);

-- Create an index on timestamp for sorting
CREATE INDEX IF NOT EXISTS idx_newsletter_timestamp ON newsletter_subscribers(timestamp);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow insertions (for signup)
CREATE POLICY "Allow public insert newsletter" ON newsletter_subscribers
FOR INSERT TO anon
WITH CHECK (true);

-- Create a policy to allow reading (if you need to display count, etc.)
CREATE POLICY "Allow public read newsletter" ON newsletter_subscribers
FOR SELECT TO anon
USING (true); 