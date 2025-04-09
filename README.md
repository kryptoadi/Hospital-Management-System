Hospital Patient Management System
Description
The Hospital Patient Management System is a web-based application designed to streamline hospital operations by managing patient records, doctor assignments, medical histories, and treatment plans. It provides CRUD functionality (Create, Read, Update, Delete) for efficient data management and tracking.

Features
Patient Record Management: Add, edit, delete, and view patient details.

Doctor Assignment: Assign doctors to patients and manage their schedules.

Medical History Tracking: Maintain detailed records of diagnoses, symptoms, allergies, and previous surgeries.

Treatment Plans: Create and manage treatment plans for patients.

Appointments Management: Schedule and track appointments between patients and doctors.

Technologies Used
Frontend
React.js

Axios

HTML/CSS

Backend
Node.js

Express.js

Database
PostgreSQL

Setup Instructions
Prerequisites
Install Node.js (LTS version recommended).

Install PostgreSQL.

Install Git.

Steps to Run the Project
Clone the repository:


bash
git clone https://github.com/<your-username>/hospital-patient-management-system.git
cd hospital-patient-management-system
Set up the database:

Open PostgreSQL (psql) and run the SQL scripts provided in the database folder to create tables and insert sample data.

Start the backend server:


bash
cd backend
npm install
npm start
Start the frontend server:


bash
cd ../frontend
npm install
npm start
Open your browser and navigate to:


text
http://localhost:3000
API Endpoints
Patients
Method	Endpoint	Description
GET	/patients	Fetch all patients
POST	/patients	Add a new patient
PUT	/patients/:id	Update patient details
DELETE	/patients/:id	Delete a patient

Doctors
Method	Endpoint	Description
GET	/doctors	Fetch all doctors
POST	/doctors	Add a new doctor
PUT	/doctors/:id	Update doctor details
DELETE	/doctors/:id	Delete a doctor

Appointments
Method	Endpoint	Description
GET	/appointments	Fetch all appointments
POST	/appointments	Schedule an appointment
PUT	/appointments/:id	Update appointment
DELETE	/appointments/:id	Cancel appointment

Medical Histories
Method	Endpoint	Description
GET	/medical-histories	Fetch all medical histories
POST	/medical-histories	Add a new medical history
PUT	/medical-histories/:id	Update medical history
DELETE	/medical-histories/:id	Delete medical history

Treatment Plans
Method	Endpoint	Description
GET	/treatment-plans	Fetch all treatment plans
POST	/treatment-plans	Add a new treatment plan
PUT	/treatment-plans/:id	Update treatment plan
DELETE	/treatment-plans/:id	Delete treatment plan

Screenshots
Dashboard
![image](https://github.com/user-attachments/assets/835cdbe2-dfab-4061-a4a9-4365c633953d)


Patient Management:
![image](https://github.com/user-attachments/assets/05e39f53-53ce-40f8-9bde-546d3b381bea)
![image](https://github.com/user-attachments/assets/d4d2959f-b56c-4069-bcb4-c2f3329ae723)
![image](https://github.com/user-attachments/assets/91054293-5fcf-4119-b9d2-bef878827c1c)
![image](https://github.com/user-attachments/assets/a973c1c2-e61e-43cf-9c9c-42a159084138)
![image](https://github.com/user-attachments/assets/87427ac6-c910-41d9-a239-11b355f7ac21)







Challenges Overcome
Implemented complex relationships between patients, doctors, and treatment plans using PostgreSQL.

Debugged API errors to ensure smooth communication between frontend and backend.

Designed a responsive UI for efficient data management.

Future Enhancements
Add user authentication for secure access.

Implement role-based access control (Admin/Doctor/Receptionist).

Integrate reporting tools for generating patient summaries.
