import React, { useState } from 'react'
import 'firebase/firestore'
import 'firebase/auth'
import { User } from '../providers/user';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Header } from './Header';

export const Login = () => {
    const {auth} = User.useContainer();

    let [error, setError] = useState<Error | null>()
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    const handleSubmit = (event: any) => {
        event.preventDefault()
        signInWithEmailAndPassword(auth,email, password)
            .catch(error => {
                setError(error)
            })
    }

    return (
        <div>
            <Header/>
            <p>Login</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type={"text"} onChange={event => setEmail(event.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type={"password"} onChange={event => setPassword(event.target.value)}/>
                </label>
                <input type={"submit"}/>
            </form>
            {error ?
                <p>An error occurred: {error.message}</p> :
                <p>All is good</p>
            }
        </div>
    )
}

export default Login