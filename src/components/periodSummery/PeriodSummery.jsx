// src/components/PeriodSummary.js
import React from 'react';

const styles = {
  periodSummaryContainer: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  p: {
    margin: '10px 0',
  },
};

const PeriodSummary = ({ periodsList }) => {
    const calculateAverageLength = () => {
        if (periodsList.length === 0) {
          return 0; // or any default value when there are no periods
        }
      
        const totalLength = periodsList.reduce((acc, period) => {
          const length = (period.endDate - period.startDate) / (1000 * 60 * 60 * 24);
          return acc + length;
        }, 0);
      
        return Math.round(totalLength / periodsList.length);
      };
      
      const predictNextPeriod = () => {
        if (periodsList.length === 0) {
          return new Date(); // or any default value when there are no periods
        }
      
        const lastPeriod = periodsList[periodsList.length - 1];
        const nextPeriodDate = new Date(lastPeriod.endDate);
        nextPeriodDate.setDate(lastPeriod.endDate.getDate() + calculateAverageCycleLength());
        return nextPeriodDate;
      };
      
      const calculateAverageCycleLength = () => {
        if (periodsList.length <= 1) {
          return 28; // or any default value when there are not enough periods to calculate the average cycle length
        }
      
        const totalCycleLength = periodsList.reduce((acc, period, index, array) => {
          if (index > 0) {
            const cycleLength = (period.startDate - array[index - 1].endDate) / (1000 * 60 * 60 * 24);
            return acc + cycleLength;
          }
          return acc;
        }, 0);
      
        return Math.round(totalCycleLength / (periodsList.length - 1));
      };
      

  return (
    <div style={styles.periodSummaryContainer}>
      <h2>Period Summary</h2>
      <p style={styles.p}>Average Periods Length: {calculateAverageLength()} days</p>
      <p style={styles.p}>Predicted Next Period: {predictNextPeriod().toDateString()}</p>
      <p style={styles.p}>Average Cycle Length: {calculateAverageCycleLength()} days</p>
    </div>
  );
};

export default PeriodSummary;
