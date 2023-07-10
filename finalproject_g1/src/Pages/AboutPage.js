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

            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100%', backgroundPosition:'center', overflow:'hidden', backgroundSize: 'cover', backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80")` }}>
                <TwoColGrid>
                    <AboutContent
                        title="About"
                        image = {img1}
                        text="The terms equity and equality are often used interchangeably in education, but it is important to understand the difference between them. While both have their benefits, equity should be the ultimate goal for educators when addressing issues faced by disadvantaged students."
                    />
                </TwoColGrid>
            </div>
            <Footer/>
            

        </>
    );
}

export default About