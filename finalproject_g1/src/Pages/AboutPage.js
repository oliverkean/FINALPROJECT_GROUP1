import AboutContent from "../Components/AboutContent";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import TwoColGrid from "../Layouts/TwoColGrid";

function About() {
    return(
        <>
            <Navbar/>

            <div className="container-fluid d-flex justify-content-center align-items-center flex-column" style={{height:'100vh', backgroundPosition:'center', overflow:'hidden', backgroundSize: 'cover', backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 50%, rgba(78,77,77,1) 100%)`}}>

                <img width='80' height='80' src="https://marketplace.canva.cn/8cjhM/MAEpYJ8cjhM/1/tl/canva-MAEpYJ8cjhM.png" alt="icon" className="mb-3"/>
                <h1 className="fw-bold text-dark fs-1">ABOUT <span className="text-danger">US</span></h1>
            </div>

            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundPosition:'center', overflow:'hidden', backgroundSize: 'cover', backgroundImage: `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(78,77,77,1) 100%),url("https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80")`}}>                
                    <div className="w-75">
                        <AboutContent
                            title="MISSION"
                            text="To promote equitable access to knowledge and skills for all individuals, regardless of their background or circumstances. We strive to create inclusive learning environments where individuals can develop not only academic proficiency but also essential life skills, critical thinking abilities, and a strong sense of social responsibility. Through our collective efforts, we aim to empower learners, foster curiosity, and inspire a lifelong love for learning."
                            text_color={'white'}
                        /> 
                    </div>
            </div>
            <Footer/>
            

        </>
    );
}

export default About