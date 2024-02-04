// App.js
import React from 'react';
import TimeSeries from './components/charts/timeSeries';
import Testing from './components/testing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UseRefExample from './components/tests/useRefExample';
import Chat from './components/tests/chat/chat';
import Hoc from './components/hocs/example1/hoc';
import Main from './components/hocs/example2/main';
import ApiTest from './components/tests/apiTest';
import Outer from './components/useEffects/first/outer';
import Entry from './components/useEffects/second/entry';
import Dashboard from './routes/dashboard';
import Login from './routes/login';
import { useSelector } from 'react-redux';
import validateAuthAndFetchData from './components/utils/validateAuthAndFetchData';
import useFetchData from './components/hooks/useFetchData';
import PageNotFound from './404';

const App = () => {
  const store = useSelector((state) => state);
  const { userData } = store.userDataSlice;
  const { error, data, loading } = validateAuthAndFetchData();
  console.log("resp data is =>", { error, loading, data });

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<TimeSeries />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/ref" element={<UseRefExample />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/hoc" element={<Main />} />
        <Route path="/apitest" element={<ApiTest />} />
        {/* <Route path="/useEffectex" element={<Outer />} /> */}
        <Route path="/useEffectex" element={<Entry />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
