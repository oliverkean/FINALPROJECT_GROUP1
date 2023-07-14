import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BodyContent5 from "../Components/BodyContent5";

import { useEffect } from "react";
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

import header3 from '../Assets/images/header3.jpg'

function About() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            disable: 'mobile'
        });
      }, [])
    return(
        <>
            <Navbar/>
            <div className="container my-5 py-5" >
                <Header 
                image={header3}
                    title="About Goal 4: Quality Education"
                    text="SDG4 focuses on education and aims to “ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.” "
                />
            </div>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '60vh', backgroundPosition:'center', overflow:'hidden', backgroundSize: 'cover', backgroundImage: `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(78,77,77,1)),url("https://images.pexels.com/photos/716281/pexels-photo-716281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>                
                <div className="container">
                    <BodyContent5
                        title="GOAL 4"
                        text="Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all"
                        text_color={'white'}
                        title_color={'danger'}
                        text_size={3}
                    />
                </div>
            </div>

            <div className="container mb-5">

                    <BodyContent5
                            title="Sustainable Development Goal 4"
                            text_color={'dark'}
                            title_color={'dark'}
                        />

                    <div className="row d-flex justify-content-center align-items-center text-center text-md-start g-4">
                        <div className="col-12 col-md-6"  data-aos="fade-right">
                            <img src="https://cdn-images-1.medium.com/max/480/1*BKBolU2eft8g3iiQt7ZcsA.jpeg" className="shadow-lg rounded h-75 w-75"/>
                        </div>
                        <div className="col-12 col-md-6"  data-aos="fade-left">
                            <p className="fs-5 text-secondary">Aims at ensuring inclusive and equitable quality education and promote lifelong learning opportunities for all. This goal ensures that all girls and boys complete free primary and secondary schooling by 2030. This goal ensures that all girls and boys complete free primary and secondary schooling by 2030. It also aims to provide equal access to affordable vocational training, to eliminate gender and wealth disparities and achieve universal access to a quality higher education.</p>
                        </div>
                    </div>
            </div>
            <Footer/>
        </>
    );
}

export default About