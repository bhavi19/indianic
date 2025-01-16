import react, { useState } from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import UserForm from './Components/UserForm';

function App() {

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const PrivateRoute = ({ element, isAuthenticated }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  }

  return (
    <ErrorBoundary>

      <BrowserRouter>
        <Layout>
          <Routes>

            <Route path="/" exact element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} isAuthenticated={isLoggedIn} />}></Route>
            <Route path="/user-form" element={<PrivateRoute element={<UserForm />} isAuthenticated={isLoggedIn} />}></Route>
            {/* <Route path="/dashboard" exact element={<Dashboard />}></Route>
            <Route path="/user-form" element={<UserForm />}></Route> */}

            <Route path="*" element={<Home />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>

    </ErrorBoundary>
  );
}

export default App;
