import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <nav>
                <Link to="/" style={{ textDecoration: "none" }}>
                    Home
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                    About/Skills
                </Link>
                <Link to="/projects" style={{ textDecoration: "none" }}>
                    Projects
                </Link>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                    Contact
                </Link>
            </nav>
        </div>
    );
};

export default Nav;
