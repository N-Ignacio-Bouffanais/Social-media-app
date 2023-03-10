import Contacts from "../components/Contacts"
import { Link } from "react-router-dom"
import { MdOutlineMenuBook } from 'react-icons/md'

function Home() {
  return (
    <main className="bg-gray-200">
          <div className="grid grid-cols-3 grid-flow-col gap-5 pt-5">
            <div className=" h-48 p-3">
                <Link to={"/profile"}>User name</Link>
                <Link to={"/friends"}>Find friends</Link>
                <Link to={"/"}>Groups</Link>
            </div>
          <div className="flex h-48 bg-slate-50 rounded p-3">
            <MdOutlineMenuBook className="text-blue-500 h-6 w-6 mr-2"/>Posts
          </div>
            <Contacts/>
        </div>
    </main>
  )
}

export default Home