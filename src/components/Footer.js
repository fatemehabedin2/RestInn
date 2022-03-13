import { Link } from "react-router-dom";

const Footer = () => {
  return (
    
    <footer>

      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-success fs-4 fw-bold">
          <div className="row container-fluid align-center">
            <div className="col-3 collapse navbar-collapse container-xxl">
              <div className="row">
              <h4>Links:</h4>
                <ul className="navbar-nav row me-auto mb-2 mb-lg-0">               
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={"/login"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/signup"}>Sign Up</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3 collapse navbar-collapse container-xxl">
              <div className="row">
              <h4>Media:</h4>
                <ul className="navbar-nav row me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={"facebook.com"}>Facebook</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"twitter.com"}>Twitter</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3 collapse navbar-collapse container-xxl">
              <div className="row">
              <h4>Policy:</h4>
                <ul className="navbar-nav row me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={"/"}>Return</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/"}>Privacy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

    </footer>
  );
}

export default Footer





