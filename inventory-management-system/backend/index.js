const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection pool
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "hospital_db",
    password: "root", // Replace with your actual password
    port: 5432,
});

// Root route
app.get("/", (req, res) => {
    res.send("Hospital Patient Management System API");
});

// PATIENTS ENDPOINTS
app.get("/patients", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM patients ORDER BY patient_id");
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching patients:", error);
        res.status(500).json({ error: "Server error" });
    }
});

app.post("/patients", async (req, res) => {
    const { name, age, gender, contact_number, payment_status, illness } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO patients (name, age, gender, contact_number, payment_status, illness) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [name, age, gender, contact_number, payment_status || "Pending", illness || "Not specified"]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error adding patient:", error);
        res.status(500).json({ error: "Failed to add patient" });
    }
});

app.get("/appointments", async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT * FROM appointments
            ORDER BY appointment_date
        `);
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching appointments:", error);
        res.status(500).json({ error: "Server error" });
    }
});

app.get("/medical-histories", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM medical_histories ORDER BY history_id");
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching medical histories:", error);
        res.status(500).json({ error: "Server error" });
    }
});


app.get("/appointments", async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT * FROM appointments
            ORDER BY appointment_date
        `);
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching appointments:", error);
        res.status(500).json({ error: "Server error" });
    }
});


// TREATMENT PLANS ENDPOINTS
app.get("/treatment-plans", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM treatment_plans ORDER BY plan_id");
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching treatment plans:", error);
        res.status(500).json({ error: "Server error" });
    }
});

app.post("/treatment-plans", async (req, res) => {
    const { patient_id, doctor_id, start_date, end_date, plan_details, medication, status } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO treatment_plans (patient_id, doctor_id, start_date, end_date, plan_details, medication, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [patient_id, doctor_id, start_date, end_date, plan_details, medication, status || "Active"]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error adding treatment plan:", error);
        res.status(500).json({ error: "Failed to add treatment plan" });
    }
});

app.put("/treatment-plans/:id", async (req, res) => {
    const { id } = req.params;
    const { patient_id, doctor_id, start_date, end_date, plan_details, medication, status } = req.body;
    try {
        const result = await pool.query(
            "UPDATE treatment_plans SET patient_id = $1, doctor_id = $2, start_date = $3, end_date = $4, plan_details = $5, medication = $6, status = $7 WHERE plan_id = $8 RETURNING *",
            [patient_id, doctor_id, start_date, end_date, plan_details, medication, status, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Treatment plan not found" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error("Error updating treatment plan:", error);
        res.status(500).json({ error: "Failed to update treatment plan" });
    }
});

app.delete("/treatment-plans/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM treatment_plans WHERE plan_id = $1 RETURNING *", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Treatment plan not found" });
        }
        res.json({ message: "Treatment plan deleted successfully" });
    } catch (error) {
        console.error("Error deleting treatment plan:", error);
        res.status(500).json({ error: "Failed to delete treatment plan" });
    }
});


app.get("/medical-histories", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM medical_histories ORDER BY history_id");
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching medical histories:", error);
        res.status(500).json({ error: "Server error" });
    }
});


app.put("/patients/:id", async (req, res) => {
    const { id } = req.params;
    const { name, age, gender, contact_number, payment_status, illness } = req.body;
    try {
        const result = await pool.query(
            "UPDATE patients SET name = $1, age = $2, gender = $3, contact_number = $4, payment_status = $5, illness = $6 WHERE patient_id = $7 RETURNING *",
            [name, age, gender, contact_number, payment_status, illness, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Patient not found" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error("Error updating patient:", error);
        res.status(500).json({ error: "Failed to update patient" });
    }
});

app.delete("/patients/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM patients WHERE patient_id = $1 RETURNING *", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Patient not found" });
        }
        res.json({ message: "Patient deleted successfully" });
    } catch (error) {
        console.error("Error deleting patient:", error);
        res.status(500).json({ error: "Failed to delete patient" });
    }
});

// DOCTORS ENDPOINTS
app.get("/doctors", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM doctors ORDER BY doctor_id");
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching doctors:", error);
        res.status(500).json({ error: "Server error" });
    }
});

app.post("/doctors", async (req, res) => {
    const { name, specialization, contact_number, email } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO doctors (name, specialization, contact_number, email) VALUES ($1, $2, $3, $4) RETURNING *",
            [name, specialization, contact_number, email]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error adding doctor:", error);
        res.status(500).json({ error: "Failed to add doctor" });
    }
});

app.put("/doctors/:id", async (req, res) => {
    const { id } = req.params;
    const { name, specialization, contact_number, email } = req.body;
    try {
        const result = await pool.query(
            "UPDATE doctors SET name = $1, specialization = $2, contact_number = $3, email = $4 WHERE doctor_id = $5 RETURNING *",
            [name, specialization, contact_number, email, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Doctor not found" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error("Error updating doctor:", error);
        res.status(500).json({ error: "Failed to update doctor" });
    }
});

app.delete("/doctors/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM doctors WHERE doctor_id = $1 RETURNING *", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Doctor not found" });
        }
        res.json({ message: "Doctor deleted successfully" });
    } catch (error) {
        console.error("Error deleting doctor:", error);
        res.status(500).json({ error: "Failed to delete doctor" });
    }
});

// APPOINTMENTS ENDPOINTS
app.get("/appointments", async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT * FROM appointments
            ORDER BY appointment_date
        `);
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching appointments:", error);
        res.status(500).json({ error: "Server error" });
    }
});

app.post("/appointments", async (req, res) => {
    const { patient_id, doctor_id, appointment_date, purpose, status, notes } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO appointments (patient_id, doctor_id, appointment_date, purpose, status, notes) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [patient_id, doctor_id, appointment_date, purpose, status || "Scheduled", notes]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error adding appointment:", error);
        res.status(500).json({ error: "Failed to add appointment" });
    }
});

app.put("/appointments/:id", async (req, res) => {
    const { id } = req.params;
    const { patient_id, doctor_id, appointment_date, purpose, status, notes } = req.body;
    try {
        const result = await pool.query(
            "UPDATE appointments SET patient_id = $1, doctor_id = $2, appointment_date = $3, purpose = $4, status = $5, notes = $6 WHERE appointment_id = $7 RETURNING *",
            [patient_id, doctor_id, appointment_date, purpose, status, notes, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Appointment not found" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error("Error updating appointment:", error);
        res.status(500).json({ error: "Failed to update appointment" });
    }
});

app.delete("/appointments/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM appointments WHERE appointment_id = $1 RETURNING *", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Appointment not found" });
        }
        res.json({ message: "Appointment deleted successfully" });
    } catch (error) {
        console.error("Error deleting appointment:", error);
        res.status(500).json({ error: "Failed to delete appointment" });
    }
});

// MEDICAL HISTORIES ENDPOINTS
app.get("/medical-histories", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM medical_histories ORDER BY history_id");
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching medical histories:", error);
        res.status(500).json({ error: "Server error" });
    }
});

app.post("/medical-histories", async (req, res) => {
    const { patient_id, record_date, diagnosis, symptoms, allergies, previous_surgeries } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO medical_histories (patient_id, record_date, diagnosis, symptoms, allergies, previous_surgeries) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [patient_id, record_date, diagnosis, symptoms, allergies, previous_surgeries]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error adding medical history:", error);
        res.status(500).json({ error: "Failed to add medical history" });
    }
});

app.put("/medical-histories/:id", async (req, res) => {
    const { id } = req.params;
    const { patient_id, record_date, diagnosis, symptoms, allergies, previous_surgeries } = req.body;
    try {
        const result = await pool.query(
            "UPDATE medical_histories SET patient_id = $1, record_date = $2, diagnosis = $3, symptoms = $4, allergies = $5, previous_surgeries = $6 WHERE history_id = $7 RETURNING *",
            [patient_id, record_date, diagnosis, symptoms, allergies, previous_surgeries, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Medical history not found" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error("Error updating medical history:", error);
        res.status(500).json({ error: "Failed to update medical history" });
    }
});

app.delete("/medical-histories/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM medical_histories WHERE history_id = $1 RETURNING *", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Medical history not found" });
        }
        res.json({ message: "Medical history deleted successfully" });
    } catch (error) {
        console.error("Error deleting medical history:", error);
        res.status(500).json({ error: "Failed to delete medical history" });
    }
});

// TREATMENT PLANS ENDPOINTS
app.get("/treatment-plans", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM treatment_plans ORDER BY plan_id");
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching treatment plans:", error);
        res.status(500).json({ error: "Server error" });
    }
});

app.post("/treatment-plans", async (req, res) => {
    const { patient_id, doctor_id, start_date, end_date, plan_details, medication, status } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO treatment_plans (patient_id, doctor_id, start_date, end_date, plan_details, medication, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [patient_id, doctor_id, start_date, end_date, plan_details, medication, status || "Active"]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error adding treatment plan:", error);
        res.status(500).json({ error: "Failed to add treatment plan" });
    }
});

app.put("/treatment-plans/:id", async (req, res) => {
    const { id } = req.params;
    const { patient_id, doctor_id, start_date, end_date, plan_details, medication, status } = req.body;
    try {
        const result = await pool.query(
            "UPDATE treatment_plans SET patient_id = $1, doctor_id = $2, start_date = $3, end_date = $4, plan_details = $5, medication = $6, status = $7 WHERE plan_id = $8 RETURNING *",
            [patient_id, doctor_id, start_date, end_date, plan_details, medication, status, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Treatment plan not found" });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error("Error updating treatment plan:", error);
        res.status(500).json({ error: "Failed to update treatment plan" });
    }
});

app.delete("/treatment-plans/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM treatment_plans WHERE plan_id = $1 RETURNING *", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Treatment plan not found" });
        }
        res.json({ message: "Treatment plan deleted successfully" });
    } catch (error) {
        console.error("Error deleting treatment plan:", error);
        res.status(500).json({ error: "Failed to delete treatment plan" });
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
