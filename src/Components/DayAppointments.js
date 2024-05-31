import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/Appointments.css';

function DayAppointments() {
    const [slots, setSlots] = useState([]);
    
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7002/Appointment?appointmentDate=2024-05-28')
          .then(response => {
            setSlots(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
          
          console.log(slots);
      }, []);

    // New function to filter slots (e.g., only new applications)
    // const filterSlots = (slots) => {
    //     return slots.filter(slot => slot.is_new);
    // };

    // const filteredSlots = filterSlots(slots);


  return (
    <>
    <div class="table-container">
        <Table responsive striped bordered hover variant='light' >
                <thead>
                    <tr>
                    <th>Time</th>
                    <th>Employee</th>
                    </tr>
                </thead>
                <tbody>
                {slots.map((slot, index) => (
                <tr key={index}>
                <td>{slot.appointment_time}</td>
                
                <td>{slot.style_name} - {slot.is_new ? "Nueva Aplicacion" :  "Retoque"}</td>
                </tr>
            ))}

                </tbody>
        </Table>
    </div>

    </>
    
  );
}

export default DayAppointments;
