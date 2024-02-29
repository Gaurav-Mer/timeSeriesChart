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
import ValidateRoute from './routes/protectedRoute/validateRoute';
import Register from './routes/register';
import Bookingstytem from './routes/bookingstytem';
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Product from './routes/product';
import ProductThunkEx from './routes/productThunkEx';
import Form from './components/useReducer/form';
import TodoList from './components/customHooks/example1/todoList';
import HandleUserForm from './components/section2/example1/useReducer/handleUserForm';
import UserList from './components/routesExample/example1/userList';
import SingleUser from './components/routesExample/example1/singleUser';
import CreateUser from './components/routesExample/example1/createUser';
import GithubList from './components/suspenseExample/example1/githubList';
import Navbar from './components/navbar/navbar';


const App = () => {
  const store = useSelector((state) => state);
  const { userData } = store.userDataSlice;
  // const { error, loading } = validateAuthAndFetchData(userData);

  // if (loading) {
  //   return <h1>i am loading ............</h1>
  // }

  // ENABLE THIS 
  // if (error) {
  //   return (<h2>I AM ERROR ****************</h2>)
  // }


  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/" element={
            <ValidateRoute userData={userData} pageType='home'>
              <TimeSeries />
            </ValidateRoute>
          } />
          <Route path="/testing" element={<Testing />} />
          <Route path="/ref" element={<UseRefExample />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/hoc" element={<Main />} />
          <Route path="/apitest" element={<ApiTest />} />
          {/* <Route path="/useEffectex" element={<Outer />} /> */}
          <Route path="/useEffectex" element={<Entry />} />
          <Route path="/dashboard" element={<ValidateRoute userData={userData} pageType='dashboard'>
            <Dashboard />
          </ValidateRoute>} />
          <Route path="/login" element={<ValidateRoute userData={userData} pageType='login'>
            <Login />
          </ValidateRoute>} />
          <Route path="/register" element={<ValidateRoute userData={userData} pageType='register'>
            <Register />
          </ValidateRoute>} />
          <Route path='/bookingSystem' element={<Bookingstytem />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productList' element={<ProductThunkEx />} />
          <Route path='/useReducer' element={<Form />} />
          <Route path='/customHooks/1' element={<TodoList />} />
          <Route path='/section2/useReducer' element={<HandleUserForm />} />
          <Route path='/userList/create' element={<CreateUser />} />
          <Route path='/userList' element={<UserList />} />
          <Route path='/userList/:id' element={<SingleUser />} />
          <Route path='/suspense' element={<GithubList />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
};

export default App;
