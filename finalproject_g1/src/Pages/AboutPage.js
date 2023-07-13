import AboutContent from "../Components/AboutContent";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import BodyContent2 from "../Components/BodyContent2";
import img1 from '../Assets/images/pexels-maël-balland-13713058.jpg'
import ThreeColGrid from "../Layouts/ThreeColGrid";
import TwoColGrid from "../Layouts/TwoColGrid";

function About() {
    return(
        <>
            <Navbar/>

            <div className="container-fluid d-flex justify-content-center align-items-center flex-column" style={{height:'50vh'}}>
                <img width='80' height='80' src="https://marketplace.canva.cn/8cjhM/MAEpYJ8cjhM/1/tl/canva-MAEpYJ8cjhM.png" alt="icon" className="mb-3"/>
                <h1 className="fw-bold text-danger fs-1">ABOUT</h1>
            </div>

            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundPosition:'center', overflow:'hidden', backgroundSize: 'cover', backgroundImage: `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(78,77,77,1)),url("https://images.pexels.com/photos/716281/pexels-photo-716281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>                
                <div className="container">
                    <AboutContent
                        title="MISSION"
                        text="To promote equitable access to knowledge and skills for all individuals, regardless of their background or circumstances. We strive to create inclusive learning environments where individuals can develop not only academic proficiency but also essential life skills, critical thinking abilities, and a strong sense of social responsibility. Through our collective efforts, we aim to empower learners, foster curiosity, and inspire a lifelong love for learning."
                        text_color={'white'}
                        title_color={'danger'}
                    />
                </div>
            </div>

            {/* <div className="container">
                
                <AboutContent
                        title="TARGETS AND INDICTORS"
                        text=""
                        text_color={'dark'}
                        title_color={'dark'}
                    />

                <BodyContent2 
                    img={img1}
                    title="Title"
                    text="Lorem impsum dolor sit amet."
                    ordL={0}
                    ordR={0}
                />
                <BodyContent2 
                    img={img1}
                    title="Title"
                    text="Lorem impsum dolor sit amet."
                    ordL={1}
                    ordR={0}
                />
            </div> */}
            <Footer/>
            

        </>
    );
}

export default About