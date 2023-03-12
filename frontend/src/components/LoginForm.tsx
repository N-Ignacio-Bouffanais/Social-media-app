import { LoginRequest } from "" 

function LoginForm() {

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const email = (e.currentTarget.elements[0] as HTMLInputElement).value
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value

        console.log(email, password)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center max-w-md mx-auto bg-gray-700 py-6 rounded">
            <input className="focus:outline-none rounded my-2 w-3/4 h-10 my-3 pl-3 text-blue-500" type="email" placeholder="Enter your email" />
            <input className="focus:outline-none rounded my-2 w-3/4 h-10 my-3 pl-3 text-blue-500" type="password" placeholder="*******" />
            <button className="bg-emerald-400 w-1/4 mt-2 rounded h-10 text-lg font-semibold">Login</button>
        </form>
    )
}

export default LoginForm