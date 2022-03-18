import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="underlineEffects">
      <ul className="navbar-list">
        <li className="nav-item">
          <a href="/">about</a>
        </li>
        <li className="nav-item">
          <a href="/links">links</a>
        </li>
        <li className="nav-item">
          <a href="/projects">projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
