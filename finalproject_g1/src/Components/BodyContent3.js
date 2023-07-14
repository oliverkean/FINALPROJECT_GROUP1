import { useEffect } from "react";
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';


function BodyContent3({image, title, text}) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            disable: 'mobile'
        });
      }, [])
    return(
        <div className="col-sm-12 col-md-12 col-lg-6 my-3" data-aos="fade-up">
            <div className="row align-items-center align-items-md-center text-lg-center px-lg-5 px-sm-0">
                <div className="col-3 col-sm-3 col-md-3 col-lg-12 text-sm-center my-1 my-lg-0 text-center">
                    <img className="img-fluid" style={{ width: '64px', height: '64px' }} src={image} alt="icon"/>
                </div>
                <div className="col-9 col-sm-3 col-md-3 col-lg-12 my-1 my-lg-0">
                    <span className="fs-5 fw-bold text-danger">{title}</span>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-12 my-1 my-lg-0">
                    <span className="fs-6 text-secondary">{text}</span>
                </div>
            </div>
        </div>
    );
}

export default BodyContent3