/*
  # Initial Schema Setup

  1. New Tables
    - domains: Stores domain registration information
      - id: Unique identifier
      - name: Domain name (unique)
      - user_id: Owner of the domain
      - price: Domain price
      - status: Domain status
      - created_at: Registration timestamp
    
    - transactions: Stores payment transactions
      - id: Unique identifier
      - domain_id: Associated domain
      - user_id: User who made the payment
      - amount: Transaction amount
      - payment_method: Payment method used
      - status: Transaction status
      - created_at: Transaction timestamp

  2. Security
    - Enable RLS on both tables
    - Add policies for user data access
*/

-- Create domains table if it doesn't exist
DO $$ BEGIN
  CREATE TABLE IF NOT EXISTS domains (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    user_id uuid NOT NULL,
    price numeric NOT NULL,
    status text NOT NULL DEFAULT 'pending',
    created_at timestamptz DEFAULT now(),
    CONSTRAINT domains_name_unique UNIQUE(name),
    CONSTRAINT domains_user_id_fkey FOREIGN KEY (user_id)
      REFERENCES auth.users(id) ON DELETE CASCADE
  );
EXCEPTION
  WHEN duplicate_table THEN
    NULL;
END $$;

-- Create transactions table if it doesn't exist
DO $$ BEGIN
  CREATE TABLE IF NOT EXISTS transactions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    domain_id uuid NOT NULL,
    user_id uuid NOT NULL,
    amount numeric NOT NULL,
    payment_method text NOT NULL,
    status text NOT NULL DEFAULT 'pending',
    created_at timestamptz DEFAULT now(),
    CONSTRAINT transactions_domain_id_fkey FOREIGN KEY (domain_id)
      REFERENCES domains(id) ON DELETE CASCADE,
    CONSTRAINT transactions_user_id_fkey FOREIGN KEY (user_id)
      REFERENCES auth.users(id) ON DELETE CASCADE
  );
EXCEPTION
  WHEN duplicate_table THEN
    NULL;
END $$;

-- Enable Row Level Security
ALTER TABLE domains ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

-- Create policies for domains table
DO $$ BEGIN
  CREATE POLICY "Users can read own domains"
    ON domains FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);
EXCEPTION
  WHEN duplicate_object THEN
    NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Users can insert own domains"
    ON domains FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);
EXCEPTION
  WHEN duplicate_object THEN
    NULL;
END $$;

-- Create policies for transactions table
DO $$ BEGIN
  CREATE POLICY "Users can read own transactions"
    ON transactions FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);
EXCEPTION
  WHEN duplicate_object THEN
    NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Users can insert own transactions"
    ON transactions FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);
EXCEPTION
  WHEN duplicate_object THEN
    NULL;
END $$;