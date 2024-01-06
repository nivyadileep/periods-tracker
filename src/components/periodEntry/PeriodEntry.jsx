// src/components/PeriodEntry.js
import React, { useState } from 'react';

const styles = {
  periodEntryContainer: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: 'auto',
  },
  label: {
    margin: '10px 0',
  },
  input: {
    padding: '8px',
    marginTop: '5px',
  },
  select: {
    padding: '8px',
    marginTop: '5px',
  },
  button: {
    marginTop: '10px',
    padding: '8px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

const PeriodEntry = ({ onAddPeriod }) => {
  const [newPeriod, setNewPeriod] = useState({
    startDate: '',
    endDate: '',
    flow: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPeriod({ ...newPeriod, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPeriod.startDate && newPeriod.endDate && newPeriod.flow) {

      const startDate = new Date(newPeriod.startDate);
      const endDate = new Date(newPeriod.endDate);

      if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
        onAddPeriod({ startDate, endDate, flow: newPeriod.flow });
        setNewPeriod({ startDate: '', endDate: '', flow: '' });
      } else {
        alert('Invalid date format. Please enter valid dates.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div style={styles.periodEntryContainer}>
      <h2>Enter Period Details</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={newPeriod.startDate}
            onChange={handleInputChange}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          End Date:
          <input
            type="date"
            name="endDate"
            value={newPeriod.endDate}
            onChange={handleInputChange}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Flow:
          <select
            name="flow"
            value={newPeriod.flow}
            onChange={handleInputChange}
            style={styles.select}
          >
            <option value="">Select Flow</option>
            <option value="heavy">Heavy</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </label>
        <button type="submit" style={styles.button}>
          Add Period
        </button>
      </form>
    </div>
  );
};

export default PeriodEntry;
