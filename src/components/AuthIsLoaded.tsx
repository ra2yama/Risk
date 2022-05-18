import React from "react"
import { User } from "../providers/user"
import Loading from "../components/Loading"


const AuthIsLoaded = (props: any) => {
    const {loading, error} = User.useContainer()

    return (
        loading ?
            <Loading/> :
        error ?
            <p>{error}</p> :
        <React.Fragment>{props.children}</React.Fragment>
    )
}

export default AuthIsLoaded