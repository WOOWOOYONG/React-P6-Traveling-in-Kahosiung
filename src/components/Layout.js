import { Link, Outlet } from "react-router-dom";

const handleToggle = () => {
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];
  navbarLinks.classList.toggle("active");
};

const removeToggle = () => {
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];
  navbarLinks.classList.remove("active");
};

const Layout = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">高雄旅遊網</div>
          <button className="toggle-button" onClick={handleToggle}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <div className="navbar-links">
            <ul>
              <li>
                <Link to="/" onClick={removeToggle}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={removeToggle}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/tour" onClick={removeToggle}>
                  Tour
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
      <footer>
        <p>2022 練習用 © 高雄旅遊資訊網</p>
      </footer>
    </>
  );
};

export default Layout;
