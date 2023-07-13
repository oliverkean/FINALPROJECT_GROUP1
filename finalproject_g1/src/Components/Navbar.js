// react router
import { Link } from "react-router-dom";

import Button from "./Button";

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg">
            <div class="container">
            <a class="navbar-brand text-uppercase fw-bold" href="/">
                <img alt="Logo" src="https://marketplace.canva.cn/8cjhM/MAEpYJ8cjhM/1/tl/canva-MAEpYJ8cjhM.png" width="20" height="20" class="d-inline-block align-text-middle me-3"/>
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
                            <Link to={`/learn-more`}>
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