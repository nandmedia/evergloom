/*
  # Add subscription management
  
  1. New Tables
    - subscriptions
      - Tracks domain subscription details
      - Handles auto-renewal settings
    - pricing_tiers
      - Defines different domain pricing tiers
      
  2. Updates
    - Add subscription_id to domains table
    - Add pricing tier references
*/

CREATE TABLE pricing_tiers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tld text NOT NULL,
  yearly_price numeric NOT NULL,
  renewal_price numeric NOT NULL
);

CREATE TABLE subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  domain_id uuid REFERENCES domains NOT NULL,
  user_id uuid REFERENCES auth.users NOT NULL,
  auto_renewal boolean DEFAULT false,
  next_renewal_date date NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Insert default pricing tiers
INSERT INTO pricing_tiers (tld, yearly_price, renewal_price) VALUES
  ('.com', 9.99, 11.99),
  ('.net', 8.99, 10.99),
  ('.org', 8.99, 10.99),
  ('.io', 29.99, 32.99),
  ('.ai', 69.99, 74.99),
  ('.dev', 12.99, 14.99),
  ('.app', 12.99, 14.99),
  ('.tech', 4.99, 6.99),
  ('.site', 2.99, 4.99),
  ('.online', 2.99, 4.99);

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own subscriptions"
  ON subscriptions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own subscriptions"
  ON subscriptions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);