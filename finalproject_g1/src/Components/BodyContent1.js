import { useEffect } from "react";
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function BodyContent1({content}) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            disable: 'mobile'
        });
      }, [])
    return(
       <>
        {content.map((content, index) => (
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 text-md-start" data-aos="fade-up">
                <div className="row align-items-lg-center justify-content-center">
                    <div className="col-sm-5 col-md-6 col-lg-12 my-md-3 my-sm-3 my-3" data-aos="fade-right">
                        <div className="row align-items-center text-center text-md-start text-sm-left align-items-md-start w-100">
                            <div className="col-12 col-md-3 col-lg-3 col-sm-12 my-lg-3 my-1">
                                <img className="img-fluid" src={content.image} alt="icon"/>
                            </div>
                            <div className="col-12 col-md-9 col-lg-9 col-sm-12 my-lg-3">
                                <span className="fs-5 fw-bold text-danger">{content.title}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-7 col-md-6 col-lg-12 my-md-3 my-sm-3 my-3 text-center text-sm-start" data-aos="fade-left">
                        <span className="fs-6 text-white fw-semibold">{content.text}</span>
                    </div>
                </div>
            </div>
        ))}
       </>
    );
}

export default BodyContent1