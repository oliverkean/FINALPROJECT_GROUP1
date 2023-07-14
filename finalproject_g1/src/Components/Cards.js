import { useEffect } from "react";
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function Cards({image, title, text, link}) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            disable: 'mobile'
        });
      }, [])
    return(
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 my-3" data-aos="fade-up" data-aos-delay="2000">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ border: 'none', overflow:'hidden', backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundImage: `url(${(image)})` }}>
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 class="pt-5 mt-5 mb-4 fs-3 lh-1 fw-bold text-stroke"><a className="link-hover link-underline-light link-light link-underline-opacity-0 link-underline-opacity-75-hover" href={link} target="_blank">{title}</a></h3>
                </div>
            </div>
        </div>
        
    );
}

export default Cards