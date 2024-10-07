'use client'
import { useFormState } from 'react-dom'
import { login } from './action'

export default function Page() {
    const initState = {
        message: null
    }

    const [state, formAction] = useFormState(login, initState)

    return (
        <form action={formAction} className="flex">
            <div className="flex flex-col gap-3 ">
            <div>Email <input name="email" className="w-full border-2"/></div>
            <div>Password <input name="password" type="password" className="w-full border-2" /></div>
            <div>Message: {state?.message}</div>
            <button className="bg-blue-300 p-4 rounded-lg w-fit h-fit my-auto">Login</button>
            </div>
        </form>
    )
}