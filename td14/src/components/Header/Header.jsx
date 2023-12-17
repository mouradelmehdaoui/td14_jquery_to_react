import { Link } from 'react-router-dom';
import logo from '../../assets/flowerLogo.png';
import employeeTableLogo from '../../assets/users-list.svg';
import addEmployeeLogo from '../../assets/users-add.svg';


const Header = ({ page }) => {
  return page === 'list' ? (
    <header>
      <section className="brand">
        <img
          src={logo}
          alt="wealthHealth logo"
          className="brand-logo"
          width={48}
          height={48}
        />
        <p className="brand-text">HRNet</p>
      </section>
      <nav aria-label="main navigation" className="nav-links">
        <Link to="/" className="nav-link menu">
          <span className="menutext">Add employee</span>
          <img
            src={addEmployeeLogo}
            alt="add employee logo"
            className="add-employee--ico"
            width={40}
            height={40}
          />
        </Link>
      </nav>
    </header>
  ) : (
    <header>
      <section className="brand">
        <img
          src={logo}
          alt="wealthHealth logo"
          className="brand-logo"
          width={48}
          height={48}
        />
        <p className="brand-text">HRNet</p>
      </section>
      <nav aria-label="main navigation" className="nav-links">
        <Link to="/employees" className="nav-link menu">
          <span className="menutext">Employee list</span>
          <img
            src={employeeTableLogo}
            alt="employee table logo"
            className="employee-list--ico"
            width={40}
            height={40}
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;