// App.js
import React from 'react';
import TimeSeries from './components/charts/timeSeries';
import Testing from './components/testing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UseRefExample from './components/tests/useRefExample';
import Chat from './components/tests/chat/chat';
import Hoc from './components/hocs/hoc';

const App = () => {
  const data = [
    { date: '2024-01-01', value: 20 },
    { date: '2024-01-02', value: 35 },
    { date: '2024-01-03', value: 25 },
    { date: '2024-01-05', value: 10 },
    { date: '2024-01-15', value: 15 },
    { date: '2024-01-21', value: 6 },
    { date: '2024-02-01', value: 40 },
    { date: '2024-03-29', value: 90 },
    { date: '2024-04-22', value: 55 },
    { date: '2024-05-05', value: 12 },
    { date: '2024-05-11', value: 49 },
    { date: '2024-05-17', value: 82 },
    { date: '2024-06-01', value: 51 },
    { date: '2024-06-10', value: 59 },
    { date: '2024-06-20', value: 35 },
    { date: '2024-06-29', value: 21 },
    { date: '2024-07-04', value: 32 },
    { date: '2024-07-21', value: 2 },
    { date: '2024-07-29', value: 78 },
    { date: '2024-08-02', value: 90 },
    { date: '2024-08-11', value: 76 },
    { date: '2024-08-13', value: 23 },
    { date: '2024-08-30', value: 78 },
    { date: '2024-08-30', value: 90 },

    // Add more data points as needed
  ];
  const adata = Array.from({ length: 100 }, (_, i) => ({ x: i, y: Math.random() * 50 + 50 }));

  return (
    // <div>
    //   <h1>Time Series Scatter Plot</h1>
    //   <TimeSeries data={adata} />
    // </div>
    // <div>
    //   <Testing />
    // </div>
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<TimeSeries data={adata} />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/ref" element={<UseRefExample />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/hoc" element={<Hoc />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
