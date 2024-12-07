import './App.css';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Style.css';

import PatientList from './patient-dashboard/PatientList';
import PatientDetails from './patient-dashboard/PatientDetails';
// import Profile from './Profile';
import Header from './Header';
// import Profileid from './Profileid';
 let username = 'coalition';
  let password = 'skills-test';
  let auth = btoa(`${username}:${password}`);
function App() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [Patients, setPatients] = useState([]);
 
    useEffect(() => {
      fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
        headers: {
          'Authorization': `Basic ${auth}`
        }
      }).then(resp => resp.json())
        .then(resp => {console.log(resp);setPatients(resp)})
    }, [])



  return (
    <>
    <Header/>
      <div className="dashboard">
      <div className="patient-list">
        <PatientList patients={Patients} onSelectPatient={setSelectedPatient} />
      </div>
      <div className="patient-details">
        <PatientDetails patient={selectedPatient} />
      </div>
    </div>
    {/* <Profile /> */}
    </>
  );
}

export default App;
