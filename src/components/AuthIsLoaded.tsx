import React from "react"
import { User, Userdata } from "../providers/user"
import Loading from "../components/Loading"
import { UserIsLoaded } from "./UserIsLoaded"


const AuthIsLoaded = (props: any) => {
    const {loading, error} = User.useContainer()

    return (
        loading ?
            <Loading/> :
        error ?
            <p>{error}</p> :
            <Userdata.Provider>
                <UserIsLoaded>
                    <React.Fragment>{props.children}</React.Fragment>
                </UserIsLoaded>
            </Userdata.Provider>
    )
}

export default AuthIsLoaded