import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DayAppointments from './DayAppointments';

function DashboardTabs() {
  return (
    <>
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="todays" title="Todays Appointments">
        Todays Appointments
        <DayAppointments/>
      </Tab>
      <Tab eventKey="pastAptms" title="Past Appointments">
        Past Appointments
      </Tab>
    </Tabs>
    </>
    
  );
}

export default DashboardTabs;