import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/navbar';
import DashboardTabs from './Components/dashboardTab';

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <DashboardTabs />

    </div>
  );

}

export default App;
