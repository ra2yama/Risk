import { Link } from 'react-router-dom';

export const Header = () => (
    <header>
        <div>
            <Link to="/">Risk</Link>
            <Link to="/login">Login</Link>
            <Link to="/rules">Rules </Link>
            <Link to="/play">Play</Link>
        </div>
    </header>
)