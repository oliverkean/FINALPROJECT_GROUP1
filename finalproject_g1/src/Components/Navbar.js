// react router
import { Link } from "react-router-dom";

import Button from "./Button";

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg">
            <div class="container">
            <a class="navbar-brand text-uppercase fw-bold" href="/">
                <img alt="Logo" src="https://img.favpng.com/20/11/21/sustainable-development-goals-education-sustainability-png-favpng-3K0Yumrj02EFKFJW51Ar2d3yn.jpg" width="40" height="40" class="d-inline-block align-text-middle me-3"/>
                Quality Education
            </a>                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon fs-4"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ms-auto mb-3 mb-lg-0">

                        <li class="nav-item">
                            <Link to={`/references`} className="nav-link text-danger fw-medium fs-6">References</Link>
                        </li>

                        <li class="nav-item">
                            <Link to={`/`}>
                                <Button color="danger" text={"Learn more"}/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar