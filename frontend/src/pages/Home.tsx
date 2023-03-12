import Contacts from "../components/Contacts"
import Gadgets from "../components/Gadgets"
import NewPost from "../components/NewPost"

function Home() {
  return (
    <main className="bg-gray-200">
          <div className="grid grid-cols-3 grid-flow-col gap-5 pt-5">
            <Gadgets/>
            <NewPost/>
            <Contacts/>
        </div>
    </main>
  )
}

export default Home