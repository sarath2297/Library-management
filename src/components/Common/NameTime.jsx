import React from 'react'
import admindash from '../Admin/AdminDashBoard.module.css'
import { useState, useEffect } from 'react';


function NameTime() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const day = days[currentDate.getDay()];
    const year = currentDate.getFullYear();
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return (
    <div>
        <h2>Hello, <span className={admindash.admindashspan}>Admin</span></h2>
        <h6>{`${month} ${date}, ${year}`} | {`${day}, ${formattedHours}: ${formattedMinutes} ${period}`} </h6>
    </div>
  )
}

export default NameTime