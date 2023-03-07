import { Fragment } from "react"

function Form() {
  return (
    <Fragment>
        <form>
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email"/>
            <input type="password" placeholder="*******" />
        </form>
    </Fragment>
  )
}

export default Form