import React from "react";
import ProfileDetails from "./ProfileDetails";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
const Profileid = () => {
    const { id } ='jessica taylor' // Extract `id` from URL
    return <ProfileDetails profileId={id} />;
};

export default Profileid;
