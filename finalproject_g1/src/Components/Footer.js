function Footer() {
  return (
    <div className="container">
        <footer className="py-5 text-md-start text-center">
            <div className="row g-4">
                <div className="col-12 col-md-6">
                    <br/><br/>
                    <img alt="Logo" src="https://marketplace.canva.cn/8cjhM/MAEpYJ8cjhM/1/tl/canva-MAEpYJ8cjhM.png" width="20" height="20" class="d-inline-block align-text-middle me-3"/>
                    Quality Education
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
        </footer>
    </div>
  )
}

export default Footer