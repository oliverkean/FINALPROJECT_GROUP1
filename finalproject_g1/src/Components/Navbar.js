// react router
import { Link } from "react-router-dom";

import Button from "./Button";

function Navbar() {
    return(
<<<<<<< HEAD
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
=======
        <nav class="navbar navbar-expand-lg">
            <div class="container">
            <a class="navbar-brand text-uppercase fw-bold" href="/">
                <img alt="Logo" src="https://img.favpng.com/20/11/21/sustainable-development-goals-education-sustainability-png-favpng-3K0Yumrj02EFKFJW51Ar2d3yn.jpg" width="40" height="40" class="d-inline-block align-text-middle me-3"/>
                Quality Education
            </a>                
>>>>>>> c3e59b53ad1906e05d552ea3a6b6732047e6265d
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to={`/`} className="nav-link active">Home</Link>
                            {/* <a class="nav-link active" aria-current="page" href="#">Learn More</a> */}
                        </li>
                        <li class="nav-item">
                            <Link to={`/references`} className="nav-link">
                                <Button text="Learn More" color="primary"/>
                            </Link>
                            {/* <a class="nav-link" href="#">References</a> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar