import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Nav;
