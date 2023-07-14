import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav class="container navbar navbar-expand-lg">
            <div class="container-fluid">
                <Link class="navbar-brand fw-bold" to={`/`}>
                    <img className="img-fluid" alt="Logo" src="https://marketplace.canva.cn/8cjhM/MAEpYJ8cjhM/1/tl/canva-MAEpYJ8cjhM.png" width="40" height="40" class="d-inline-block align-text-middle me-3"/>
                    <span className="mx-3">QEd</span>
                </Link> 
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" to={`/`}>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={`/about`}>About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={`/references`}>References</Link>
                        </li>
                        <li class="nav-item d-block d-lg-none">
                            <Link class="btn btn-danger" to={`/learn-more`}>Learn More</Link>
                        </li>
                    </ul>
                </div>
                <Link class="btn btn-danger d-none d-lg-block" to={`/learn-more`}>Learn More</Link>
            </div>
        </nav>
    );
}

