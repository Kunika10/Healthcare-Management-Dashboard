import React, { useState } from "react";
import "./PatientList.css";
import SearchIcon from '@mui/icons-material/Search';

const PatientList = ({ patients, onSelectPatient }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setQuery("");
    setFilteredData([]);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    const filteredData = patients.filter((item) =>
      (item.name || "").toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filteredData);
};
  return (
    <>
      <div className="patient-user">
        <h2>Patient</h2>
        <div className="search-container">
      <div className="search-input-wrapper">
        <div onClick={handleOpenModal} className="search-button"><SearchIcon/></div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Search for a Name</h2>
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Type a name to search..."
              className="search-input"
            />

            <div className="results-list">
              {filteredData.length > 0 ? (
                filteredData.map((patient, index) => (
                  <div
                    key={index}
                    className="result-item"
                    onClick={() => alert(`Selected: ${patient.name}`)}
                  >
                    {patient.name}
                  </div>
                ))
              ) : (
                query && <p>No results found</p>
              )}
            </div>

            <button onClick={handleCloseModal} className="close-modal-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
      </div>
      <div>
        {patients.map((patient) => (
          <div className="patient">
            <li
              key={patient.name}
              onClick={() => onSelectPatient(patient)}
              className="patient-item"
            >
              <div className="profile-menu">
                <img src={patient.profile_picture} />

                <div className="profile-det">
                  <h5>{patient.name}</h5>
                  <p>{patient.gender}, <span>{patient.age}</span> </p>
                </div>

              </div>

            </li>
          </div>
      ))}
      </div>
    </>
  );
}

export default PatientList;