# 🏥 Hospital Patient Management System

A **web-based application** designed to streamline hospital operations by managing patient records, doctor assignments, medical histories, treatment plans, and appointments. Built with a modern tech stack, it enables seamless CRUD operations for efficient data management.

---

## 📌 Features

- **Patient Record Management**: Add, edit, delete, and view patient details.
- **Doctor Assignment**: Assign doctors to patients and manage their schedules.
- **Medical History Tracking**: Maintain detailed records of diagnoses, symptoms, allergies, and previous surgeries.
- **Treatment Plans**: Create and manage treatment plans for patients.
- **Appointments Management**: Schedule and track appointments between patients and doctors.

---

## 🛠️ Technologies Used

### Frontend
- React.js
- Axios
- HTML/CSS

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (LTS version recommended)
- PostgreSQL
- Git

### Steps to Run the Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/hospital-patient-management-system.git
   cd hospital-patient-management-system
   ```

2. **Set up the database**
   - Open PostgreSQL (`psql`) and run the SQL scripts provided in the `/database` folder to create tables and insert sample data.

3. **Start the backend server**
   ```bash
   cd backend
   npm install
   npm start
   ```

4. **Start the frontend server**
   ```bash
   cd ../frontend
   npm install
   npm start
   ```

5. **Open your browser**
   - Navigate to: [http://localhost:3000](http://localhost:3000)

---

## 🔗 API Endpoints

### 🧑 Patients
| Method | Endpoint        | Description          |
|--------|------------------|----------------------|
| GET    | `/patients`      | Fetch all patients   |
| POST   | `/patients`      | Add a new patient    |
| PUT    | `/patients/:id`  | Update patient info  |
| DELETE | `/patients/:id`  | Delete a patient     |

### 🩺 Doctors
| Method | Endpoint        | Description         |
|--------|------------------|---------------------|
| GET    | `/doctors`       | Fetch all doctors   |
| POST   | `/doctors`       | Add a new doctor    |
| PUT    | `/doctors/:id`   | Update doctor info  |
| DELETE | `/doctors/:id`   | Delete a doctor     |

### 📅 Appointments
| Method | Endpoint              | Description             |
|--------|------------------------|-------------------------|
| GET    | `/appointments`        | Fetch all appointments  |
| POST   | `/appointments`        | Schedule an appointment |
| PUT    | `/appointments/:id`    | Update appointment      |
| DELETE | `/appointments/:id`    | Cancel appointment      |

### 📝 Medical Histories
| Method | Endpoint                  | Description             |
|--------|----------------------------|-------------------------|
| GET    | `/medical-histories`       | Fetch all histories     |
| POST   | `/medical-histories`       | Add a medical history   |
| PUT    | `/medical-histories/:id`   | Update medical history  |
| DELETE | `/medical-histories/:id`   | Delete medical history  |

### 💊 Treatment Plans
| Method | Endpoint                  | Description            |
|--------|----------------------------|------------------------|
| GET    | `/treatment-plans`        | Fetch all plans        |
| POST   | `/treatment-plans`        | Add a treatment plan   |
| PUT    | `/treatment-plans/:id`    | Update treatment plan  |
| DELETE | `/treatment-plans/:id`    | Delete treatment plan  |

---

## 📸 Screenshots

### 📊 Dashboard  
![Dashboard](https://github.com/user-attachments/assets/835cdbe2-dfab-4061-a4a9-4365c633953d)

### 🧾 Patient Management  
![Patient Form](https://github.com/user-attachments/assets/05e39f53-53ce-40f8-9bde-546d3b381bea)  
![Patient List](https://github.com/user-attachments/assets/d4d2959f-b56c-4069-bcb4-c2f3329ae723)  
![Patient Details](https://github.com/user-attachments/assets/91054293-5fcf-4119-b9d2-bef878827c1c)  
![Edit Patient](https://github.com/user-attachments/assets/a973c1c2-e61e-43cf-9c9c-42a159084138)  
![Medical Info](https://github.com/user-attachments/assets/87427ac6-c910-41d9-a239-11b355f7ac21)

---

## 🧩 Challenges Overcome

- Designed complex relationships in PostgreSQL between patients, doctors, and treatment plans.
- Debugged asynchronous API requests and ensured smooth communication between frontend and backend.
- Created a responsive and intuitive UI for efficient navigation and management.

---

## 🚀 Future Enhancements

- Add user authentication for secure access.
- Implement **role-based access control** (Admin, Doctor, Receptionist).
- Integrate **reporting tools** for generating downloadable patient summaries and statistics.

---

## 🤝 Contributing

Contributions are welcome!  
Fork the repo, create a feature branch, push your changes, and open a pull request.
