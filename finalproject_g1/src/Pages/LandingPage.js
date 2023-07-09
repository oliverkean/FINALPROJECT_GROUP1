import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";
import ThreeColGrid from "../Layouts/ThreeColGrid";
import TwoColGrid from "../Layouts/TwoColGrid";
import BodyContent1 from "../Components/BodyContent1";
import BodyContent2 from "../Components/BodyContent2";

import icon1 from '../Assets/images/icons8-education-100.png'
import icon2 from '../Assets/images/icons8-bullseye-100.png'
import icon3 from '../Assets/images/icons8-development-64.png'
import img1 from '../Assets/images/pexels-maël-balland-13713058.jpg'
import Heading from "../Components/Heading";
import BodyContent3 from "../Components/BodyContent3";

function LandingPage() {
    return(
        <div>
            {/* Nav */}
            {/* <Navbar/> */}
            {/* Header */}
            {/* Body Layout 1 */}
            <div className="container"> 
                
                <ThreeColGrid
                    col1={<BodyContent1 image={icon1} title="Education Opportunities" text="Give Learning Opportunities to everyone."/>}
                    col2={<BodyContent1 image={icon2} title="Equitable Education" text="Providing all learning resource"/>}
                    col3={<BodyContent1 image={icon3} title="Child Development" text="Developing all skill capabilities"/>}
                />
            </div>
            {/* Body Layout 2 */} 
            <div className="container">
                <Heading 
                    text="Heading"
                    size="1"
                    weight="bold"
                    
                    align="left"
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
            </div>
            {/* Body Layout 3 */}
            <div className="container">
                <Heading 
                    text="Heading"
                    size="1"
                    weight="bold"
                    
                    align="left"
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
                <BodyContent2 
                    img={img1}
                    title="Title"
                    text="Lorem impsum dolor sit amet."
                    ordL={0}
                    ordR={0}
                />
            </div>
            {/* Body Layout 4 */}
            <div className="container">
                <ThreeColGrid
                    col1={<Cards image={img1} title="Education Opportunities" text="Give Learning Opportunities to everyone."/>}
                    col2={<Cards image={img1} title="Equitable Education" text="Providing all learning resource"/>}
                    col3={<Cards image={img1} title="Child Development" text="Developing all skill capabilities"/>}
                />
                <ThreeColGrid
                    col1={<Cards image={img1} title="Education Opportunities" text="Give Learning Opportunities to everyone."/>}
                    col2={<Cards image={img1} title="Equitable Education" text="Providing all learning resource"/>}
                    col3={<Cards image={img1} title="Child Development" text="Developing all skill capabilities"/>}
                />
            </div>
            
            {/* Body Layout 5 */}
            <div className="container">
                
                <TwoColGrid>
                    <BodyContent3 image={icon1} title="Education Opportunities" text="Give Learning Opportunities to everyone."/>
                    <BodyContent3 image={icon1} title="Education Opportunities" text="Give Learning Opportunities to everyone."/>
                </TwoColGrid>
                <TwoColGrid>
                    <BodyContent3 image={icon1} title="Education Opportunities" text="Give Learning Opportunities to everyone."/>
                    <BodyContent3 image={icon1} title="Education Opportunities" text="Give Learning Opportunities to everyone."/>
                </TwoColGrid>
            </div>
            {/* Body Layout 6 */}
            {/* Body Layout 7 */}
            {/* Footer */}

            {/* Testing */}
            {/*testing olibs, suggestion put it into section*/}
            {/* <div className="container"> 
                <ThreeColGrid
                    col1={<BodyContent1 image={icon1} title="Education Opportunities" text="Give Learning Opportunities to everyone."/>}
                    col2={<BodyContent1 image={icon2} title="Equitable Education" text="Providing all learning resource"/>}
                    col3={<BodyContent1 image={icon3} title="Child Development" text="Developing all skill capabilities"/>}
                />
            </div> */}

            
            <Footer/>

        </div>
    );
}

export default LandingPage