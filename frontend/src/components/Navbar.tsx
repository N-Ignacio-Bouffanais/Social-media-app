import { Link } from "react-router-dom"

function Navbar(): JSX.Element {
  return (
    <header>
      <nav className="flex justify-center bg-slate-900 h-16">
        <ul className="flex flex-wrap mx-auto items-center justify-center ">
          <li className="flex text-lg"><Link className="mx-8 font-semibold text-slate-50 hover:text-cyan-400" to="/profile">Profile</Link></li>
          <li className="flex text-lg"><Link className="mx-8 font-semibold text-slate-50 hover:text-cyan-400" target="_blank" rel="noopener noreferrer" to="https://github.com/N-Ignacio-Bouffanais/Social-media-app">Docs</Link></li>
          <li className="flex text-lg"><Link className="mx-8 font-semibold text-slate-50 hover:text-cyan-400" to="/login">LogIn</Link></li>
          <li className="flex text-lg"><Link className="mx-8 font-semibold text-slate-50 hover:text-cyan-400" to="/register">Register</Link></li>
          <li className="flex text-lg"><Link className="mx-8 font-semibold text-slate-50 hover:text-cyan-400" to="/">LogOut</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar