/*
  # Create news table and policies

  1. New Tables
    - `news`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `content` (text, required)
      - `image_url` (text, required)
      - `published_at` (timestamp with time zone, required)
      - `created_at` (timestamp with time zone, default: now())
      - `user_id` (uuid, foreign key to auth.users)

  2. Security
    - Enable RLS on `news` table
    - Add policies for:
      - Authenticated admin users can insert/update/delete
      - Anyone can read published news
*/

CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  image_url text NOT NULL,
  published_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users NOT NULL
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read published news
CREATE POLICY "Anyone can read published news"
  ON news
  FOR SELECT
  USING (true);

-- Allow authenticated admin users to manage news
CREATE POLICY "Admins can manage news"
  ON news
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);