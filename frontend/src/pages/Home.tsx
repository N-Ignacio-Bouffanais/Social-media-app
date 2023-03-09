import Contacts from "../components/Contacts"
import { Link } from "react-router-dom"

function Home() {
  return (
    <main>
          <div className="grid grid-cols-3 grid-flow-col gap-5">
            <div className=" h-48 bg-red-400">
                <Link to={"/profile"}>Nombre de usuario</Link>
                <p>Buscar amigos</p>
                <p>Grupos</p>
            </div>
            <div className=" h-48 bg-blue-400">main data</div>
            <Contacts/>
        </div>
    </main>
  )
}

export default Home