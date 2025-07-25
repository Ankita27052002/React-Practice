import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./pages/Login";




function App(){
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard/>
                </ProtectedRoute>
              }/>

      </Routes>

    </>
  );
};

export default App;