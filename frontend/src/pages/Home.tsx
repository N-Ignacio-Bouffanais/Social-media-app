import Contacts from "../components/Contacts"
import Gadgets from "../components/Gadgets"
import { MdOutlineMenuBook } from 'react-icons/md'

function Home() {
  return (
    <main className="bg-gray-200">
          <div className="grid grid-cols-3 grid-flow-col gap-5 pt-5">
            <Gadgets/>
          <div className="h-48 bg-slate-50 rounded p-3">
          <h2 className="flex text-blue-500 text-xl font-semibold justify-center mt-2 underline underline-offset-8"><MdOutlineMenuBook className="h-7 w-7 mr-2" />Posts</h2>
          </div>
            <Contacts/>
        </div>
    </main>
  )
}

export default Home