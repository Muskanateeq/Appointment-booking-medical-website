
"use client"; 
import { useState } from 'react';
import styles from './AppointmentForm.module.css';

const BookAppointment: React.FC = () => {
  const [showForm, setShowForm] = useState(true); // State to control form visibility
  const [confirmationMessage, setConfirmationMessage] = useState(''); // State for confirmation message

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    setConfirmationMessage('🩺 Your appointment has been confirmed!'); // Set confirmation message with emoji
    setShowForm(false); // Hide the form

    // Remove the confirmation message after 3 seconds and show the form again
    setTimeout(() => {
      setConfirmationMessage('');
      setShowForm(true);
    }, 5000);
  };

  return (
    <div className={styles.appointmentContainer}>
      {showForm ? (
        <form className={styles.appointmentform} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="department">Department</label>
            <select id="department" name="department">
              <option value="Dermatologist">Dermatologist</option>
              <option value="Orthodontist">Orthodontist</option>
              <option value="Primary Health Care">Primary Health Care</option>
              <option value="Pediatrician">Pediatrician</option>
              <option value="Ophthalmology">Ophthalmology</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="doctor">Doctor</label>
            <select id="doctor" name="doctor">
              <option value="Dr Catherine Castillo (Dermatologist)">Dr Catherine Castillo (Dermatologist)</option>
              <option value="Dr Alexander Burns (Orthodontist)">Dr Alexander Burns (Orthodontist)</option>
              <option value="Dr Evan Taller (Primary Health Care)">Dr Evan Taller (Primary Health Care)</option>
              <option value="Dr Jamie Brannon (Pediatrician)">Dr Jamie Brannon (Pediatrician)</option>
              <option value="Dr Belly Doe (Ophthalmology)">Dr Belly Doe (Ophthalmology)</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name">Your Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="time">Time</label>
            <input type="time" id="time" name="time" required />
          </div>

          <div className={styles.submitBtn}>
            <button type="submit">Send</button>
          </div>
        </form>
      ) : (
        <div className={styles.confirmationMessage}>
          {confirmationMessage}
        </div>
      )}
    </div>
  );
};

export default BookAppointment;
