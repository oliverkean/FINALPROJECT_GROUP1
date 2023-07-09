// react router
import { Link } from "react-router-dom";

import Button from "./Button";

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
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