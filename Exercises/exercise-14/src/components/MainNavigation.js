import { Link } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <header className="header">
      <h2>Pages</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">View Movies</Link>
          </li>
          <li>
            <Link to="/addMovie">Add Movie</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
