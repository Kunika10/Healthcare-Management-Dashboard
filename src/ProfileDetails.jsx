import React, { useEffect, useState } from "react";

const ProfileDetails = ({ patientId }) => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let username = 'coalition';
let password = 'skills-test';
let auth = btoa(`${username}:${password}`);
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await fetch(
          `https://fedskillstest.coalitiontechnologies.workers.dev`, {
            headers: {
        'Authorization': `Basic ${auth}`
      }
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }
        const data = await response.json();
        console.log(data);
        setPatient(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatient();
  }, [patientId]);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {patient ? (
        <div>
          <h1>{patient.name}</h1>
          <p>Gender: {patient.gender}</p>
          <p>Age: {patient.age}</p>
          {/* Add more fields based on API response */}
        </div>
      ) : (
        <p>No profile found</p>
      )}
    </div>
  );
};

export default ProfileDetails;
