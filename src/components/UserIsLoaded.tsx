
   
import React, { useEffect } from 'react'
import {User, Userdata} from "../providers/user";
import Loading from './Loading';
import { Error } from './Error';
import { doc, getDoc } from 'firebase/firestore';

export const UserIsLoaded = (props: any) => {
    const {user, firestore} = User.useContainer()
    const {setUserData, loading, setLoading, error, setError} = Userdata.useContainer()

    useEffect(() => {
        if(user) {
            setLoading(true)
            let docRef = doc(firestore, 'users', user.uid)
            
            getDoc(docRef).then(snapshot => {
                setUserData({
                    username: snapshot.data()?.username
                })
                setLoading(false)
            })
        }
    },[user, firestore, setError, setLoading, setUserData])

    return (
        loading?
            <Loading />:
            error?
                <Error error={error}/>:
                props.children
    )
}