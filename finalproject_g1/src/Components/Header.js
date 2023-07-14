import { Link } from "react-router-dom";
import { useEffect } from "react";
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header({title, text, image}) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            disable: 'mobile'
        });
      }, [])
    return(
        <>
            <div class="row pb-0 pe-lg-0 pt-lg-5 align-items-center">
                <div class="col-lg-7 col-12 p-3">
                    <h1 class="display-4 fw-bold lh-1 text-body-emphasis my-4">{title}</h1>
                    <p class="lead my-4">{text}</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 my-4">
                        <Link to={`/learn-more`} class="btn btn-danger btn-lg px-4 me-md-2 fw-bold">Learn More</Link>
                    </div>
                </div>
                <div class="col-lg-4 col-12 offset-lg-1 p-0 overflow-hidden " data-aos="fade-left">
                    <img class="rounded-lg-3" src={image} alt="" width="720"/>
                </div>
            </div>
        </>
    );
}