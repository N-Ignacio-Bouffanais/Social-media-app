import { Fragment } from "react"

function Form() {
  return (
    <Fragment>
      <form className="flex flex-wrap max-w-xl mx-auto justify-center">
        <input className="focus:outline-none flex w-3/4 rounded m-2 h-10 my-3 pl-3 text-blue-500" type="text" placeholder="Enter your name" />
        <input className="focus:outline-none flex w-3/4 rounded m-2 h-10 my-3 pl-3 text-blue-500" type="email" placeholder="Enter your email" />
        <input className="focus:outline-none flex w-3/4 rounded m-2 h-10 my-3 pl-3 text-red-500" type="password" placeholder="*******" />
      </form>
    </Fragment>
  )
}

export default Form