CREATE TABLE log_attempts(
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text,
  body text,
  timestamp timestamp DEFAULT current_timestamp
)
