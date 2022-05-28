import { User, Userdata } from "../providers/user"

export const Profile = () => {
    const { user, auth } = User.useContainer()
    const { userData } = Userdata.useContainer()

    return (
        <div>
            <p>{userData?.username}-{user?.email}</p>
        </div>
    )
}