import { Link } from "react-router-dom"

function Navbar(): JSX.Element {
  return (
    <header>
      <nav className="flex justify-center bg-blue-200 h-16">
        <ul className="flex flex-wrap mx-auto items-center justify-center ">
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/">Contacts</Link></li>
          <li><Link target="_blank" rel="noopener noreferrer" to="https://github.com/N-Ignacio-Bouffanais/Social-media-app">Docs</Link></li>
          <li><Link to="/login">LogIn</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/">LogOut</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar