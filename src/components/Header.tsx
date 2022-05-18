import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../providers/user';

export const Header = () => {
    const {user, auth} = User.useContainer()

    return (
        <header>
            <div>
                <Link to="/">Risk</Link>
                {user ?
                    <Link to="/" onClick = {() => {auth.signOut()}}>Sign Out</Link>:
                    <Fragment>
                        <Link to="/login">Login</Link> <Link to="signup">Sign Up</Link>
                    </Fragment>
                }
                <Link to="/rules">Rules </Link>
                <Link to="/play">Play</Link>
            </div>
        </header>
    )
}