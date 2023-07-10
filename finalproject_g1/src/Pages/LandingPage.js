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
import TextContent from "../Components/TextContent";
import ListGroup from '../Components/ListGroup';

function LandingPage() {
    const item = ['item1' ,'item2', 'item3']
    return(
        <div className="">
            {/* Nav */}
            <Navbar/>

            {/* Header */}

            {/* Body Layout 1 */}
            <div className="container py-5 my-5"> 
                <TextContent
                    text="Why is Quality Education important?"
                    size="2"
                    weight="semibold"
                    align="center"
                />
                <TextContent
                    text="
                        Quality Education serves as a catalyst for sustainable development and plays a pivotal role in shaping societies.
                    "
                    size="2"
                    weight="normal"
                    align="center"
                />
                <ThreeColGrid>
                    <BodyContent1 
                        image={icon1} 
                        title="Empowering Individuals" 
                        text="Access to quality education empowers individuals by providing them with knowledge, skills, and tools necessary to lead fulfilling lives, make informed decisions, and contribute positively to their communities."
                    />
                    <BodyContent1 
                        image={icon2} 
                        title="Reducing Poverty and Inequality" 
                        text="Education is a powerful tool in combating poverty and reducing inequality. It equips individuals with the skills to earn a decent living, opens up employment opportunities, and breaks the cycle of intergenerational poverty."
                    />
                    <BodyContent1 
                        image={icon3} 
                        title="Fostering Peace and Social Cohesion" 
                        text="Education fosters understanding, tolerance, and respect among individuals from diverse backgrounds. It promotes peaceful coexistence, social cohesion, and a sense of global citizenship, laying the foundation for a more inclusive and harmonious world."
                    />
                </ThreeColGrid>
            </div>

            {/* Body Layout 2 */} 
            <div className="container">
                <Heading 
                    title="Key Targets and Indicators"
                    text="To track progress towards achieving Goal 4, the United Nations has identified key targets and indicators. Here are some important ones:"
                    size="1"
                    weight="bold"
                    
                    align="left"
                />
                <BodyContent2 
                    img={img1}
                    title="Ensure Free, Equitable, and Quality Primary and Secondary Education"
                    text="Efforts should be made to provide free, inclusive, and quality primary and secondary education to all children, irrespective of their background or circumstances."
                    ordL={0}
                    ordR={0}
                />
                <BodyContent2 
                    img={img1}
                    title="Promote Access to Affordable and Quality Technical, Vocational, and Higher Education"
                    text="Access to affordable and quality technical, vocational, and higher education should be facilitated to equip individuals with the skills required for employment and entrepreneurship."
                    ordL={1}
                    ordR={0}
                />
                <BodyContent2 
                    img={img1}
                    title="Enhance Youth and Adult Literacy"
                    text="Efforts should be made to promote literacy and numeracy skills among youth and adults, empowering them to actively participate in society and the economy."
                    ordL={0}
                    ordR={0}
                />
            </div>

            {/* Body Layout 3 */}
            <div className="container">
                <Heading 
                    title="Challenges and Solutions"
                    text="Achieving quality education for all is not without its challenges. Here are some common obstacles and potential solutions:"
                    size="1"
                    weight="bold"
                    
                    align="left"
                />
                <ListGroup
                    items={item}
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