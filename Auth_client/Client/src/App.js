import React, {useEffect, useState} from "react";
import "./App.css";
import {
  BrowserRouter as Router, Routes, Route,
  Navigate
} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./navbar/Login";
import SearchingResult from "./pages/SearchingResult";
import AdminPage from "./navbar/AdminPage";
import AdminUpload from "./navbar/Admin_upload";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

function App() {

  const [listData, setListData] = useState([])
  useEffect(()=>{
    console.log("listData in app", listData)
  },[listData])
  return (
    <div>
      <Router>
        <Routes>

          <Route exact path="/" element={<Main listData={listData} setListData = {setListData} />} />
          <Route exact path="/SearchResult" element={<SearchingResult listData={listData} setListData = {setListData}/>} />
          <Route path="/" element={<ProtectedRoute />}>

            <Route exact path="/Admin" element={<AdminPage />} />
            <Route exact path="/AdminEdit" element={<AdminUpload />} />
            <Route path="*" element={<Navigate to="/" replace />} />

          </Route>

          <Route path="/" element={<PublicRoute />}>
            <Route exact path="/LOGIN" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
