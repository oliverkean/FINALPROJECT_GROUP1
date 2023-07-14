import { Link } from "react-router-dom";
import { useEffect } from "react";
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Jumbotron() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            disable: 'mobile'
        });
      }, [])
    return(
        <div class="p-5 text-center bg-dark rounded-3" data-aos="fade-up">
            <h1 class=" text-danger">More information about Quality Education</h1>
            <p class="lead text-white fw-semibold">
            Click the button to learn more about the 4th goal of the United Nations Sustainable Development Goals
            </p>
            <Link to={`/learn-more`} class="btn btn-danger btn-lg px-4 me-md-2 fw-bold">Learn More</Link>
        </div>
    );
}