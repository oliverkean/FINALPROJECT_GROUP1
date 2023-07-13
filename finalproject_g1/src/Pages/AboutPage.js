import AboutContent from "../Components/AboutContent";
import Footer from "../Components/Footer";
import Heading from "../Components/Heading";
import Navbar from "../Components/Navbar";
import TwoColGrid from "../Layouts/TwoColGrid";
import img1 from '../Assets/images/pexels-maël-balland-13713058.jpg'

function About() {
    return(
        <>
            <Navbar/>

            <div className="container d-flex justify-content-center align-items-center flex-column" style={{height:'50vh'}}>
                <img width='80' height='80' src="https://marketplace.canva.cn/8cjhM/MAEpYJ8cjhM/1/tl/canva-MAEpYJ8cjhM.png" alt="icon" className="mb-3"/>
                <h1 className="fw-bold text-dark fs-1">ABOUT <span className="text-danger">US</span></h1>
            </div>

            <div className="container">
                <AboutContent
                        title="MISSION"
                        text="To promote equitable access to knowledge and skills for all individuals, regardless of their background or circumstances. We strive to create inclusive learning environments where individuals can develop not only academic proficiency but also essential life skills, critical thinking abilities, and a strong sense of social responsibility. Through our collective efforts, we aim to empower learners, foster curiosity, and inspire a lifelong love for learning."
                    />            
            </div>
            

            
            <Footer/>
            

        </>
    );
}

export default About