
import { Link } from 'react-router-dom';
import '../../App.css'

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg Navbar color-1 ">
      <div className="container-fluid">
        <Link className="nav-link active  text-light" to="/">HOME</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-4">
              <a className="nav-link active text-light" aria-current="page" id='navbar-events' href='#card-events' >New Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" href="#card-diaries">Event Diaries</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-5" type="search" placeholder="Search" aria-label="Search" />

          </form>
          <ul className="navbar-nav me-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#contact">Contact Us</a>
            </li>

          </ul>
         

        </div>
      </div>
    </nav>
  )
}
