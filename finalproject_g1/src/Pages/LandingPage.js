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
        <div className="">
            {/* Nav */}
            <Navbar/>
            {/* <Navbar/> */}
            {/* Header */}
            {/* Body Layout 1 */}
            <div className="container"> 
                <ThreeColGrid>
                    <BodyContent1 image={icon1} title="Education Opportunities" text="Give Learning Opportunities to everyone."/>
                    <BodyContent1 image={icon2} title="Equitable Education" text="Providing all learning resource"/>
                    <BodyContent1 image={icon3} title="Child Development" text="Developing all skill capabilities"/>
                </ThreeColGrid>
            </div>
            {/* Body Layout 2 */} 
            <div className="container">
                <Heading 
                    title="Equality vs Equity"
                    text="The terms equity and equality are often used interchangeably in education, but it is important to understand the difference between them. While both have their benefits, equity should be the ultimate goal for educators when addressing issues faced by disadvantaged students. "
                    size="1"
                    weight="bold"
                    
                    align="left"
                />
                <BodyContent2 
                    img={img1}
                    title="Equality"
                    text="Equality means treating everyone the same and providing equal rights, opportunities, and resources. However, equality may not address specific needs and challenges faced by individuals. "
                    ordL={0}
                    ordR={0}
                />
                <BodyContent2 
                    img={img1}
                    title="Equity"
                    text="On the other hand, equity focuses on providing resources and support based on individual circumstances. Schools that prioritize equity understand their students' needs and provide tailored resources to help overcome their specific challenges."
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
                <Heading 
                    text="Heading"
                    size="1"
                    weight="bold"
                    
                    align="left"
                />  
                <ThreeColGrid>
                    <Cards image={img1} title="Education Opportunities" text="Give Learning Opportunities to everyone."/>
                    <Cards image={img1} title="Equitable Education" text="Providing all learning resource"/>
                    <Cards image={img1} title="Child Development" text="Developing all skill capabilities"/>
                    <Cards image={img1} title="Education Opportunities" text="Give Learning Opportunities to everyone."/>
                    <Cards image={img1} title="Equitable Education" text="Providing all learning resource"/>
                    <Cards image={img1} title="Child Development" text="Developing all skill capabilities"/>
                </ThreeColGrid>
            </div>
            
            {/* Body Layout 5 */}
            <div className="container">
                <Heading 
                    text="Heading"
                    size="1"
                    weight="bold"
                    
                    align="left"
                />
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