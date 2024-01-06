// src/components/PeriodList.js
import React from 'react';

const styles = {
  periodListContainer: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  ul: {
    listStyleType: 'none',
    padding: '0',
  },
  li: {
    margin: '10px 0',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  liHover: {
    backgroundColor: '#f9f9f9',
  },
};

const PeriodList = ({ periodsList }) => {
  return (
    <div style={styles.periodListContainer}>
      <h2>Periods List</h2>
      {periodsList.length === 0 ? (
        <p>No periods entered yet.</p>
      ) : (
        <ul style={styles.ul}>
          {periodsList.map((period, index) => (
            <li
              key={index}
              style={styles.li}
            >
              <strong>Start Date:</strong> {period.startDate.toDateString()},{' '}
              <strong>End Date:</strong> {period.endDate.toDateString()},{' '}
              <strong>Flow:</strong> {period.flow}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PeriodList;
