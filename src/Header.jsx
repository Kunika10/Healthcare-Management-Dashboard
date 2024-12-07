import React, { useState } from 'react'
import logo from './assets/image/logo.png';
import overview from "./assets/image/home_FILL0_wght300_GRAD0_opsz24@2x.png"
import patient_img from "./assets/image/group_FILL0_wght300_GRAD0_opsz24@2x.png"
import schedule_img from "./assets/image/calendar_today_FILL0_wght300_GRAD0_opsz24@2x.png"
import chat from "./assets/image/chat_bubble_FILL0_wght300_GRAD0_opsz24@2x.png"
import transaction from "./assets/image/credit_card_FILL0_wght300_GRAD0_opsz24@2x.png"
import user_img from "./assets/image/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png"
import SettingsIcon from '@mui/icons-material/Settings';


function Header() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const notifications = [
    { id: 1, message: "Profile" },
    { id: 2, message: "Setting" },
    { id: 3, message: "Logout" },
  ];
  return (
    <>
<header className="header-menu">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <nav className="nav-menu">
        <ul>
          <li>
            <a
              href="#overview"
              className={activeMenu === "overview" ? "active" : ""}
              onClick={() => setActiveMenu("overview")}
            > <span><img src={overview}/></span>
              Overview
            </a>
          </li>
          <li>
            <a
              href="#patients"
              className={activeMenu === "patients" ? "active" : ""}
              onClick={() => setActiveMenu("patients")}
            > <span><img src={patient_img}/></span>
              Patients
            </a>
          </li>
          <li>
            <a
              href="#schedule"
              className={activeMenu === "schedule" ? "active" : ""}
              onClick={() => setActiveMenu("schedule")}
            > <span><img src={schedule_img}/></span>
              Schedule
            </a>
          </li>
          <li>
            <a
              href="#message"
              className={activeMenu === "message" ? "active" : ""}
              onClick={() => setActiveMenu("message")}
            > <span><img src={chat}/></span>
              Message 
            </a>
          </li>
          <li>
            <a
              href="#transactions"
              className={activeMenu === "transaction" ? "active" : ""}
              onClick={() => setActiveMenu("transaction")}
            > <span><img src={transaction}/></span>
              Transactions 
            </a>
          </li>
        </ul>
      </nav>

      <div className="user-section">
      <div className='user-profile'>
        <img src={user_img}/>
        <div className='user-de'>
          <h4>Dr. Jose Simmons</h4>
          <p>General Practitioner</p>
        </div>
      </div>
        <div
          className="notification-button"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          <span className="material-icons"><SettingsIcon/></span>
        </div>

        {isDropdownOpen && (
          <div className="notification-dropdown">
            {notifications.length > 0 ? (
              <ul>
                {notifications.map((notification) => (
                  <li key={notification.id}>{notification.message}</li>
                ))}
              </ul>
            ) : (
              <p>No new notifications</p>
            )}
          </div>
        )}

      </div>
    </header>
    </>
  );
}
export default Header;