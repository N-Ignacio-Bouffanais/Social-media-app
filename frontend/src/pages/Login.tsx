import { Fragment } from "react"
import LoginForm from "../components/LoginForm"

function Login() {
  return (
    <Fragment>
      <h1 className="text-2xl text-center py-4">Login</h1>
      <LoginForm />
    </Fragment>
  )
}

export default Login