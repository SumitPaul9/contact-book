import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar fixed-top shadow navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">Contact Book</Link>
            </div>
            <div>
                <Link to="/contacts/add" className="btn btn-light ml-auto">
                    Create Contact
                </Link>
            </div>
        </div>
    )
}

export default Navbar
