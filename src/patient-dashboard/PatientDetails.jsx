import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import rr from "../assets/image/respiratory rate@2x.png"
import temp from "../assets/image/temperature@2x.png"
import hr from "../assets/image/HeartBPM@2x.png"
import birthicon from "../assets/image/BirthIcon@2x.png"
import gender from "../assets/image/FemaleIcon@2x.png"
import contact from "../assets/image/PhoneIcon@2x.png"
import insurance from "../assets/image/InsuranceIcon@2x.png"
import download_img from "../assets/image/download_FILL0_wght300_GRAD0_opsz24 (1)@2x.png"
// import "./PatientDetails.css";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const PatientDetails = ({ patient }) => {
  const [selectedDuration, setSelectedDuration] = useState("3M");
  const [selectedMonth, setSelectedMonth] = useState([0]);

  if (!patient) {
    return <p>Select a patient to view their details.</p>;
  }
  const durationOptions = [
    { label: "6 Month", value: "6 Month" },
    { label: "All", value: "ALL" },
  ];

  const filteredHistory = patient.diagnosis_history.filter((entry) => {
    const entryDate = new Date(entry.month + " " + entry.year);
    const currentDate = new Date();
    if (selectedDuration === "6 Month") {
      return entryDate >= new Date(currentDate.setMonth(currentDate.getMonth() - 6));
    } else {
      return true;
    }
  });


  const chartData = {
    labels: filteredHistory.map((date) => date.month + " " + date.year),
    datasets: [
      {
        data: filteredHistory.map((entry) => (entry.blood_pressure.systolic.value)
        ),
        borderColor: "#C26EB4",
        backgroundColor: "#C26EB4",
        tension: 0.3,
        fill: true,
      },
      {
        data: filteredHistory.map((entry) => (entry.blood_pressure.diastolic.value)),
        borderColor: "#7E6CAB",
        backgroundColor: "#7E6CAB",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Patient Diagnosis History",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
        },
      },
      y: {
        title: {
          display: true,
        },
      },
    },
  };

  const filteredHistory1 =
    patient.diagnosis_history?.filter((entry) => entry.date?.startsWith(selectedMonth));

  return (
    <div key={patient.name}>

      <div className="patient-sec">
        <Row>
          <Col md={8} sm={12} xs={12}>
            <div className="pat-leftside">
              <h2>Diagnosis History</h2>
              <div className="patient-left">

                <div className="patient-chart">
                  <select
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    value={selectedDuration}
                  >
                    {durationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <Line data={chartData} options={chartOptions} />
                </div>
                <div className="patient-det">
                  <div className="patient-value">
                    <div className="pat-cir">
                      <span></span><h6>Systolic</h6></div>

                    {/* {patient.diagnosis_history.map((entry) => (
          <h4> {entry.blood_pressure.systolic.value}</h4>  
        ))} */}
                    <h4>160</h4>
                    <div className="pat-arrow">
                      <span></span>
                      <p>Higher than Average</p></div>
                  </div>
                  <hr></hr>
                  <div className="patient-value det">
                    <div className="pat-cir">
                      <span></span><h6>Diastolic</h6> </div>
                    {/* {patient.diagnosis_history.map((entry) => (
          <h4> {entry.blood_pressure.systolic.value}</h4>  
        ))} */}
                    <h4>78</h4>
                    <div className="pat-arrow arr">
                      <span></span>
                      <p>Low than Average</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="patient-bp">
                <div className="pat-bp" style={{ background: '#E0F3FA' }}>
                  <img src={rr} />
                  <h6>Respiratory Rate</h6>
                  <h3>20 bpm</h3>
                  <p>Normal</p>
                </div>
                <div className="pat-bp" style={{ background: '#FFE6E9' }}>
                  <img src={temp} />
                  <h6>Temperature</h6>
                  <h3>98.6 F</h3>
                  <p>Normal</p>
                </div>
                <div className="pat-bp" style={{ background: '#FFE6F1' }}>
                  <img src={hr} />
                  <h6>Heart Rate</h6>
                  <h3>78 bpm</h3>
                  <p className="hr">Lower than Average</p>
                </div>
              </div>
            </div>
            <div className="digno-list">
              <h2>Diagnostic List</h2>
              <Table>
                <thead>
                  <tr>
                    <th>Problem/Diagnosis</th>
                    <th colSpan={2}>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hypertension</td>
                    <td colSpan={2}>Chronic High Blood Pressure</td>
                    <td>Under observation </td>
                  </tr>
                  <tr>
                    <td>Type 2 Diabetes</td>
                    <td colSpan={2}>Insulin resistance and elevated blood sugar</td>
                    <td>Cured</td>
                  </tr>
                  <tr>
                    <td>Asthma</td>
                    <td colSpan={2}>Recurrent episodes of bronchial constriction</td>
                    <td>Inactive</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
          <Col md={4} sm={12} xs={12}>
            <div className="patient-profile-det">
              <div className="patient-img">
                <img src={patient.profile_picture} />
                <h2>{patient.name}</h2>
              </div>
              <div className="patient-profile-menu">
                <img src={birthicon} />
                <div className="patient-pp">
                  <p>Date of Birth</p>
                  <h5>{patient.date_of_birth}</h5>
                </div>
              </div>
              <div className="patient-profile-menu">
                <img src={gender} />
                <div className="patient-pp">
                  <p>Gender</p>
                  <h5>{patient.gender}</h5>
                </div>
              </div>
              <div className="patient-profile-menu">
                <img src={contact} />
                <div className="patient-pp">
                  <p>Contact Info</p>
                  <h5>{patient.phone_number}</h5>
                </div>
              </div>
              <div className="patient-profile-menu">
                <img src={contact} />
                <div className="patient-pp">
                  <p>Emergency Contacts</p>
                  <h5>{patient.emergency_contact}</h5>
                </div>
              </div>
              <div className="patient-profile-menu">
                <img src={insurance} />
                <div className="patient-pp">
                  <p>Insurance Provider</p>
                  <h5>{patient.insurance_type}</h5>
                </div>
              </div>
              <div className="info-btn">
                <Button>Show All Information</Button>
              </div>
            </div>
            <div className="lab-detail">
              <h2>Lab Results</h2>
              <div className="lab-menu">
                <p>Blood Tests</p>
                <img src={download_img} />
              </div>
              <div className="lab-menu">
                <p>CT Scans</p>
                <img src={download_img} />
              </div>
              <div className="lab-menu">
                <p>Radiology Reports</p>
                <img src={download_img} />
              </div>
              <div className="lab-menu">
                <p>X-Rays</p>
                <img src={download_img} />
              </div>
              <div className="lab-menu">
                <p>Urine Test</p>
                <img src={download_img} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PatientDetails;