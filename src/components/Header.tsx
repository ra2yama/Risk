import { Link } from 'react-router-dom';
import { User } from '../providers/user';

export const Header = () => {
    const {user} = User.useContainer()

    return (
        <header>
            <div>
                <Link to="/">Risk</Link>
                {user ? 
                    <Link to="/login">Login</Link> <Link to="signup">Sign Up</Link>}
                <Link to="/rules">Rules </Link>
                <Link to="/play">Play</Link>
            </div>
        </header>
    )
}