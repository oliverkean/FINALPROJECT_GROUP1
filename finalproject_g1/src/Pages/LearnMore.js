import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";
import ThreeColGrid from "../Layouts/ThreeColGrid";
import Heading from "../Components/Heading";
import Header from "../Components/Header";


// images
import img1 from '../Assets/images/pexels-maël-balland-13713058.jpg'

import BodyContent4 from "../Components/BodyContent4";


function LearnMore() {
    return(
        <>
            <Navbar/>
             {/* Header */}
             <div className="container">
                <Header 
                    title="Learn More"
                    text="Discover the transformative power of quality education, where knowledge meets opportunity, unlocking boundless potential for learners of all ages and backgrounds."
                />
            </div>
            <div className="container py-5 my-5">
                <Heading 
                    title="Goal 4: Quality Education Infographic"
                    text="Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all"
                    size="4"
                    weight="bold"
                    align="left"
                /> 
                <BodyContent4/>
            </div>
            <div className="container">
                <Heading 
                    title="News and Articles"
                    text="Here are some relevant news and articles for more information:"
                    size="4"
                    weight="bold"
                    align="left"
                />  
                <ThreeColGrid>
                    <Cards image={img1} title="Education Opportunities" text="Give Learning Opportunities to everyone."/>
                    <Cards image={img1} title="Equitable Education" text="Providing all learning resource"/>
                    <Cards image={img1} title="Child Development" text="Developing all skill capabilities"/>
                    <Cards image={img1} title="Child Development" text="Developing all skill capabilities"/>
                    <Cards image={img1} title="Child Development" text="Developing all skill capabilities"/>
                    <Cards image={img1} title="Child Development" text="Developing all skill capabilities"/>
                </ThreeColGrid>
            </div>
            <Footer/>
        </>
    );
}

export default LearnMore