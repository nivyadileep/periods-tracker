// src/App.js
import React, { useState } from 'react';
import PeriodList from './components/periodList/PeriodList';
import PeriodEntry from './components/periodEntry/PeriodEntry';
import PeriodSummary from './components/periodSummery/PeriodSummery';
import PeriodSetupModal from './components/periodSetupModal/periodSetupModal';

const App = () => {
  const [periodsList, setPeriodsList] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [initialSetupData, setInitialSetupData] = useState(null);
  const styles = {
   container: {
      padding: '20px',
      backgroundColor: '#FFF',
    },
    dataContainer: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  };

  const addPeriod = (newPeriod) => {
    setPeriodsList([...periodsList, newPeriod]);
  };

  const handleSetupSubmit = (setupData) => {
    setInitialSetupData(setupData);
    setShowModal(false);
  };

  return (
    <div style={styles.container}>
      <h1>Women's Periods Tracker App</h1>
      <div style={styles.dataContainer}>
        <PeriodEntry onAddPeriod={addPeriod} />
        <PeriodList periodsList={periodsList} />
        <PeriodSummary periodsList={periodsList} />
        {showModal && (
        <PeriodSetupModal
          onClose={() => setShowModal(false)}
          onSetupSubmit={handleSetupSubmit}
        />
      )}
        {initialSetupData && (
        <div>
          <h2>App Set Up</h2>
          <p>Last Periods Date: {initialSetupData.lastPeriods.toDateString()}</p>
          <p>Normal Periods Cycle Gap: {initialSetupData.cycleGap} days</p>
          <p>Normal Periods Length: {initialSetupData.periodLength} days</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default App;
