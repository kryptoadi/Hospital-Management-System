-- Drop existing table if it exists
DROP TABLE IF EXISTS patients;

-- Create patients table
CREATE TABLE patients (
    patient_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(10) NOT NULL,
    contact_number VARCHAR(15) NOT NULL,
    payment_status VARCHAR(50) DEFAULT 'Pending',
    illness VARCHAR(255) DEFAULT 'Not specified'
);

-- Insert sample data
INSERT INTO patients (name, age, gender, contact_number, payment_status, illness)
VALUES 
('Jane Smith', 25, 'Female', '9876543210', 'Paid', 'Cold'),
('Alice Johnson', 35, 'Female', '5556667777', 'Pending', 'Flu');
