import { useEffect } from "react";
import infographic from "../Assets/images/Goal4Infographic.png";
import Heading from "./Heading";
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BodyContent4() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            disable: 'mobile'
        });
      }, [])
    return(
        <>
            <div class="">
                <div class="mb-4 rounded-3" data-aos="fade-up">
                    <div class="container-fluid py-5">
                        <img className="img-fluid" src={infographic} alt="Goal 4 Infographic"/>
                    </div>
                </div>
                <Heading 
                    title="Related Topics and Relevant Articles"
                    text="Here are some topics and relevant articles related to Goal 4:"
                    size="4"
                    weight="bold"
                    align="left"
                /> 
                <div class="row align-items-md-stretch">
                    <div class="col-md-6 my-3 my-sm-2" data-aos="fade-right" data-aos-delay="2000">
                        <div class="h-100 p-5 text-bg-dark rounded-3">
                        <h2 className="text-danger">Education</h2>
                        <p className="">Education for all has always been an integral part of the sustainable development agenda. The World Summit on Sustainable Development (WSSD) in 2002 adopted the Johannesburg Plan of Implementation (JPOI) which in its Section X, reaffirmed both the Millennium Development Goal 2 in achieving universal primary education by 2015 and the goal of the Dakar Framework for Action on Education for All to eliminate gender disparity in primary and secondary education by 2005 and at all levels of education by 2015. The JPOI addressed the need to integrate sustainable development into formal education at all levels, as well as through informal and non-formal education opportunities.</p>
                        <a href="https://sdgs.un.org/topics/education" target="_blank" class="btn btn-outline-light">Education</a>
                        </div>
                    </div>
                    <div class="col-md-6 my-3 my-sm-2" data-aos="fade-left" data-aos-delay="2000">
                        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
                        <h2>The Higher Education Sustainability Initiative</h2>
                        <p> The Higher Education Sustainability Initiative (HESI) hosted the first of a series of three webinars organized in the lead-up to the HESI+10 Global Forum which will highlight the role of higher education in building back better from COVID-19 and advancing the 2030 Agenda for Sustainable Development. The HESI+10 Global Forum, will take place on 6 July 2022 as a special event to the High-level Political Forum on Sustainable Development and will spotlight HESI’s 10th Anniversary since its launch at the 2012 UN Conference on Sustainable Development (or Rio+20 Conference).</p>
                        <a href="https://sdgs.un.org/topics/education" target="_blank" class="btn btn-outline-danger" type="button">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}