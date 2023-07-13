import TwoColGrid from "../Layouts/TwoColGrid";
import { useEffect } from "react";
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function BodyContent2({img, title, text, ordL, ordR}) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            disable: 'mobile'
        });
      }, [])
    return(
        <>
            <TwoColGrid>
                <div className={`col-sm-12 col-md-6 col-lg-6 order-lg-${ordL}`} data-aos="fade-right">
                    <img src={img} alt="Image" loading="lazy" className="img-fluid"/>
                </div>
                <div className={`col-sm-12 col-md-6 col-lg-6 order-lg-${ordR} p-5`} data-aos="fade-left">
                    <div className="my-3">
                        <span className="fs-4 fw-bold">{title}</span>
                    </div>
                    <div className="my-3">
                        <span className="fs-5 text-secondary">{text}</span>
                    </div>
                </div>
            </TwoColGrid>
        </>
    );
}

export default BodyContent2