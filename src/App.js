import './App.css';
import {NavLink} from "react-router-dom";

import './App.css';
import Routes from "./routes";

function App() {
  return (
      <div>
        <nav className="nav nav-pills">
          <NavLink className="nav-link nav-item" exact to="/">Home</NavLink>
          <NavLink className="nav-link" to="/listViews"> List View</NavLink>
          <NavLink className="nav-link" to="/entryView">Entry View</NavLink>
        </nav>

        <Routes/>


      </div>
  );
}

export default App;
