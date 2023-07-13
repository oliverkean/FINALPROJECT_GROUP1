import { useEffect } from "react";
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';


function BodyContent3({image, title, text}) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            disable: 'mobile'
        });
      }, [])
    return(
        <div className="col-sm-12 col-md-12 col-lg-6 my-3" data-aos="fade-up">
            <div className="row align-items-md-center text-lg-center px-lg-5 px-sm-0">
                <div className="col-sm-4 col-md-4 col-lg-12 text-sm-center my-1 my-lg-0">
                    <img className="img-fluid" style={{ width: '64px', height: '64px' }} src={image} alt="icon"/>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-12 my-1 my-lg-0">
                    <span className="fs-5 fw-bold">{title}</span>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-12 my-1 my-lg-0">
                    <span className="fs-6 text-secondary">{text}</span>
                </div>
            </div>
        </div>
    );
}

export default BodyContent3