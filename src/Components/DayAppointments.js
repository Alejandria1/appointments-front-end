import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/Appointments.css';
function getDate() {
    const today = new Date();
    
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = today.getDate();

    if(month < 10){
      month = '0' + month;
    }
    if (date < 10) { 
      date = '0' + date;
  }
    return `${year}-${month}-${date}`;
  }

  
function DayAppointments() {
    const [slots, setSlots] = useState([]);
    
    const [employees, setEmployees] = useState([]);

    const today = getDate();

    useEffect(() => {
        axios.get('https://localhost:7002/Appointment?appointmentDate=' + today) 
          .then(response => {
            setSlots(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
          
    }, []);

    useEffect(() => {
      axios.get('https://localhost:7002/api/Employees') 
        .then(response => {
          setEmployees(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

          
    const getTimesOnly = (slots) => {
      var timeOnlyList = [];
      slots.forEach(element => {
        timeOnlyList.push(element.appointment_time);
      });

      const uniqueArray = [...new Set(timeOnlyList)];
      return uniqueArray;
        
    };

    const timesOnly = getTimesOnly(slots);

  return (
    <>
    <div className="table-container">
            <Table responsive striped bordered hover variant='light'>
                <thead>
                    <tr>
                        <th>Time</th>
                        {employees.map((employee, index) => (
                            <th key={employee.employee_id}>{employee.emp_name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {timesOnly.map((time, index) => (
                        <tr key={index}>
                            <td>{time}</td>

                            {employees.map((employee) => (
                                <td key={employee.employee_id}>

                                    {slots.map((slot) => {
                                        if (slot.appointment_time === time && slot.employee_id === employee.employee_id) {
                                            return `${slot.style_name} - ${slot.is_new ? "Nueva Aplicacion" : "Retoque"}`;
                                        }
                                        else if (slot.appointment_time === time && slot.employee_id === 0) {
                                          return `${slot.style_name}`;
                                      }
                                    })}
                                    
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
  

    </>
    
  );
}

export default DayAppointments;
