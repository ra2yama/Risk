import { initFirebase } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useState }  from "react"
import { createContainer } from "unstated-next"

const { auth } = initFirebase()

export const useUser = () => {
    let [user, loading, error] = useAuthState(auth)
    return { auth, user, loading, error}
}

export const useUserData = () => {
    let [userData, setUserData] = useState()
    let [loading, setLoading] = useState<boolean>(false)
    let [error, setError] = useState<Error>()

    return {userData, setUserData, loading, setLoading, error, setError}
}

export const User = createContainer(useUser)
export const Userdata = createContainer(useUserData)