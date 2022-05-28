import React, {FormEvent, useState} from 'react'
import {User} from "../providers/user";
import { Header } from "./Header";
import { Error } from "./Error";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, Firestore, setDoc } from 'firebase/firestore';

export const Signup = () => {
    const { auth, firestore } = User.useContainer()

    let [email, setEmail] = useState("")
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let [confPassword, setConfPassword] = useState("")
    let [error, setError] = useState<Error>()

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault()

        //check that the information in the forms is valid
        if(password !== confPassword){
            setError(new (Error as any)('Passwords do not match'))
        }

        if(username === ""){
            setError(new (Error as any)('Username cannot be empty'))
        }

        createUserWithEmailAndPassword(auth, email, password).then(user => {
            let users = collection(firestore, 'users');

            setDoc(doc(users, user.user.uid), {
                "username": username
            }).catch(setError)
        }).catch(setError)

    }

    return (
        <div>
            <Header />
            <p>Sign Up</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type={"text"} onChange={event=>setEmail(event.target.value)}/>
                </label>
                <label>
                    Username:
                    <input type={"text"} onChange={event=>setUsername(event.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type={"password"} onChange={event=>setPassword(event.target.value)}/>
                </label>
                <label>
                    Confirm Password:
                    <input type={"password"} onChange={event=>setConfPassword(event.target.value)}/>
                </label>
                <input type={"submit"}/>
            </form>
            {error && <Error error={error}/>}
        </div>
    )
}

export default Signup;