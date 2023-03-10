import { Link } from "react-router-dom"
import { BsFillPeopleFill } from "react-icons/bs"
import { MdGroups } from "react-icons/md"

function Gadgets() {
  return (
      <div className=" h-48 px-3">
          <Link to={"/profile"} className="flex mb-3 pl-2 font-semibold h-12 mr-2 items-center rounded hover:bg-gray-400">User name</Link>
          <Link to={"/friends"} className="flex mb-3 pl-2 font-semibold h-12 mr-2 items-center rounded hover:bg-gray-400" ><BsFillPeopleFill className="mr-2 h-9 w-9 p-1 text-slate-50 bg-blue-500 rounded-full" />Find friends</Link>
          <Link to={"/"} className="flex mb-3 pl-2 font-semibold h-12 mr-2 items-center rounded hover:bg-gray-400"><MdGroups className="mr-2 h-9 w-9 p-1 text-slate-50 bg-blue-500 rounded-full" />Groups</Link>
      </div>
  )
}

export default Gadgets