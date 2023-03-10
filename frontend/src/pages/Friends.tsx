import { Link } from "react-router-dom"
import { BsFillPeopleFill, BsFillPersonFill, BsFillPersonPlusFill } from "react-icons/bs"

function Friends() {
  return (
    <main className="bg-gray-200">
          <div className="bg-slate-50 h-screen w-1/3 pl-3">
            <h1 className="text-2xl font-bold pl-2 py-3">Friends</h1>
              <Link to={"/friends"} className="flex mb-4 pl-2 font-semibold h-12 mr-2 items-center rounded focus:bg-gray-200"><BsFillPeopleFill className="bg-gray-300 h-9 w-9 p-2 mr-2 rounded-full focus:bg-blue-500 text-slate-50"/>Home</Link>
              <Link to={"/friends/requests"} className="flex mb-4 pl-2 font-semibold h-12 mr-2 items-center rounded focus:bg-gray-200"><BsFillPersonFill className="bg-gray-300 h-9 w-9 p-2 mr-2 rounded-full focus:bg-blue-500 text-slate-50"/>Friend Requests</Link>
              <Link to={"/friends/suggestions"} className="flex mb-4 pl-2 font-semibold h-12 mr-2 items-center rounded focus:bg-gray-200"><BsFillPersonPlusFill className="bg-gray-300 h-9 w-9 p-2 mr-2 rounded-full focus:bg-blue-500 text-slate-50"/>Suggestions</Link>
        </div>
    </main>
  )
}

export default Friends