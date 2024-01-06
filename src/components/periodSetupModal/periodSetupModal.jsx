// src/components/PeriodSetupModal.js
import React, { useState } from 'react';

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '400px',
  },
  label: {
    display: 'block',
    margin: '10px 0',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
  },
  button: {
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

const PeriodSetupModal = ({ onClose, onSetupSubmit }) => {
  const [lastPeriods, setLastPeriods] = useState('');
  const [cycleGap, setCycleGap] = useState('');
  const [periodLength, setPeriodLength] = useState('');

  const handleSubmit = () => {
    // Validate input before submitting
    if (lastPeriods && cycleGap && periodLength) {
      onSetupSubmit({
        lastPeriods: new Date(lastPeriods),
        cycleGap: parseInt(cycleGap, 10),
        periodLength: parseInt(periodLength, 10),
      });
      onClose();
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <h2>Initial Setup</h2>
        <label style={styles.label}>
          Last Periods Date:
          <input
            type="date"
            value={lastPeriods}
            onChange={(e) => setLastPeriods(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Normal Periods Cycle Gap (in days):
          <input
            type="number"
            value={cycleGap}
            onChange={(e) => setCycleGap(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Normal Periods Length (in days):
          <input
            type="number"
            value={periodLength}
            onChange={(e) => setPeriodLength(e.target.value)}
            style={styles.input}
          />
        </label>
        <button
          onClick={handleSubmit}
          style={styles.button}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PeriodSetupModal;
