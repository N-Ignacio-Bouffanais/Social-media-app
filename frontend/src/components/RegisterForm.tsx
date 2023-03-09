
function Form() {
  return (
      <form className="flex flex-col items-center max-w-md mx-auto bg-gray-700 py-6 rounded">
        <input className="focus:outline-none rounded my-2 w-3/4 h-10 my-3 pl-3 text-blue-500" type="text" placeholder="Enter your name" />
        <input className="focus:outline-none rounded my-2 w-3/4 h-10 my-3 pl-3 text-blue-500" type="email" placeholder="Enter your email" />
        <input className="focus:outline-none rounded my-2 w-3/4 h-10 my-3 pl-3 text-blue-500" type="password" placeholder="*******" />
        <button className="bg-emerald-400 w-1/4 mt-2 rounded h-10 text-lg font-semibold">Register</button>
      </form>
  )
}

export default Form