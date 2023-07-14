import { Link } from "react-router-dom"
function Footer() {
  return (
    <div className="container">
<<<<<<< HEAD
        <footer className="py-5 text-md-start text-center">
            <div className="row g-4">
                <div className="col-12 col-md-6">
                    <br/><br/>
                    <img alt="Logo" src="https://img.favpng.com/20/11/21/sustainable-development-goals-education-sustainability-png-favpng-3K0Yumrj02EFKFJW51Ar2d3yn.jpg" width="40" height="40" class="d-inline-block align-text-middle me-3"/>
                    <span className="fw-bold">Quality Education </span>            
                </div>

                {/* <div className="col-2">
                </div>
                
                <div className="col-2">
                </div> */}

                <div className="col-12 col-md-2">
                    <h5>Mobile App</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Live share</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Video record</a></li>
                    </ul>
                </div>

                <div className="col-12 col-md-2">
                    <h5>Community</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Featured artists</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">The Portal</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Live events</a></li>
                    </ul>
                </div>

                <div className="col-12 col-md-2">
                    <h5>Company</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About us</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact us</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">History</a></li>
                    </ul>
                </div>
                
                </div>

                <div className="d-flex justify-content-between py-4 border-top">
                <p>© 2023 APPDEV GROUP1</p>
                <ul className="list-unstyled d-flex">Follow us:
                    <li className="ms-3"><a className="link-dark" href="#"><i class="bi bi-facebook"></i></a></li>
                    <li className="ms-3"><a className="link-dark" href="#"><i class="bi bi-instagram"></i></a></li>
                    <li className="ms-3"><a className="link-dark" href="#"><i class="bi bi-twitter"></i></a></li>
                    <li className="ms-3"><a className="link-dark" href="#"><i class="bi bi-discord"></i></a></li>
                </ul>
            </div>
=======
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
            <div class="col mb-3">
            <Link class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" to={`/`}>
                <img className="img-fluid" alt="Logo" src="https://img.favpng.com/20/11/21/sustainable-development-goals-education-sustainability-png-favpng-3K0Yumrj02EFKFJW51Ar2d3yn.jpg" width="40" height="40" class="d-inline-block align-text-middle me-3"/>
                <span className="mx-3">QEd</span>
            </Link> 
            <p class="text-body-secondary">© APPDEV GROUP 2 | 2023</p>
            </div>

            <div class="col mb-3">

            </div>

            <div class="col mb-3">
            <h5>Navigation</h5>
            <ul class="nav flex-column">
                <li class="nav-item mb-2"><Link to={`/`}k class="nav-link p-0 text-body-secondary">Home</Link></li>
                <li class="nav-item mb-2"><Link to={`/about`}k class="nav-link p-0 text-body-secondary">About</Link></li>
                <li class="nav-item mb-2"><Link to={`/references`}k class="nav-link p-0 text-body-secondary">References</Link></li>
                <li class="nav-item mb-2"><Link to={`/learn-more`}k class="nav-link p-0 text-body-secondary">Learn More</Link></li>
            </ul>
            </div>

            <div class="col mb-3">
            <h5>Resources</h5>
            <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="https://sdgs.un.org/goals/goal4" target="_blank" class="nav-link p-0 text-body-secondary">UN SDG Goal 4</a></li>
                <li class="nav-item mb-2"><a href="https://sdgs.un.org/"  target="_blank" class="nav-link p-0 text-body-secondary">United Nations SDGs</a></li>
                <li class="nav-item mb-2"><a href="https://www.unesco.org/gem-report/en/monitoring-sdg4#:~:text=SDG%204%20is%20to%20ensure,and%20three%20means%20of%20implementation."  target="_blank" class="nav-link p-0 text-body-secondary">Unesco</a></li>
            </ul>
            </div>

            <div class="col mb-3">
            <h5>For Developers</h5>
            <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="https://getbootstrap.com/docs/5.3" target="_blank" class="nav-link p-0 text-body-secondary">Bootstrap</a></li>
                <li class="nav-item mb-2"><a href="https://getbootstrap.com/docs/5.3/examples/" target="_blank" class="nav-link p-0 text-body-secondary">Bootstrap Examples</a></li>
                <li class="nav-item mb-2"><a href="https://www.pexels.com/" target="_blank" class="nav-link p-0 text-body-secondary">Pexels</a></li>
                <li class="nav-item mb-2"><a href="https://michalsnik.github.io/aos" target="_blank" class="nav-link p-0 text-body-secondary">Animate on Scroll Library</a></li>
                <li class="nav-item mb-2"><a href="https://chat.openai.com" target="_blank" class="nav-link p-0 text-body-secondary">ChatGPT</a></li>
            </ul>
            </div>
>>>>>>> a4857c1221dfd9763fed869aab81f8e90f0ee43f
        </footer>
    </div>
    )
}

export default Footer