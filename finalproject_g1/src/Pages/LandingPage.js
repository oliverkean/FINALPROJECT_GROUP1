import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";
import ThreeColGrid from "../Layouts/ThreeColGrid";
import TwoColGrid from "../Layouts/TwoColGrid";
import BodyContent1 from "../Components/BodyContent1";
import BodyContent2 from "../Components/BodyContent2";
import Heading from "../Components/Heading";
import BodyContent3 from "../Components/BodyContent3";
import Header from "../Components/Header";


// images
import freeeducation from '../Assets/images/freeeducation.jpg'
import qualitytechnical from '../Assets/images/qualitytechnical.jpg'
import literacy from '../Assets/images/literacy.png'
import newart1 from '../Assets/images/newsart1.jpg'
import newart2 from '../Assets/images/newsart2.jpg'
import newart3 from '../Assets/images/newsart3.jpg'
import schoolicon from '../Assets/images/icons8-school-100.png'
import equityicon from '../Assets/images/icons8-equity-security-100.png'
import teachericon from '../Assets/images/icons8-teacher-100.png'
import policyicon from '../Assets/images/icons8-policy-100.png'
import trainingicon from '../Assets/images/icons8-training-100.png'
import savingsicon from '../Assets/images/icons8-euro-money-100.png'
import header1 from '../Assets/images/header1.webp'


import { bodyContent1 } from "../content/landingContent";
import Jumbotron from "../Components/Jumbotron";


function LandingPage() {
    return(
        <div className="contianer">
            {/* Nav */}
            <Navbar/>

            {/* Header */}
            <div className="container" >
                <Header 
                    image={header1}
                    title="UN Sustainable Development Goal #4: Quality Education"
                    text="Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all"
                />
            </div>
            {/* Body Layout 1 */}
            
            <div className="container px-lg-5 px-3 py-3 my-5 rounded bg-dark text-white" data-aos="fade-up"> 
                <ThreeColGrid>
                    <BodyContent1 content={bodyContent1}/>
                </ThreeColGrid>
            </div>

            {/* Body Layout 2 */} 
            <div className="container">
                <Heading 
                    title="Key Targets and Indicators"
                    text="To track progress towards achieving Goal 4, the United Nations has identified key targets and indicators. Here are some important ones:"
                    size="3"
                    weight="bold"
                    
                    align="left"
                    
                />
                <BodyContent2 
                    img={freeeducation}
                    title="Ensure Free, Equitable, and Quality Primary and Secondary Education"
                    text="Efforts should be made to provide free, inclusive, and quality primary and secondary education to all children, irrespective of their background or circumstances."
                    ordL={0}
                    ordR={0}
                />
                <BodyContent2 
                    img={qualitytechnical}
                    title="Promote Access to Affordable and Quality Technical, Vocational, and Higher Education"
                    text="Access to affordable and quality technical, vocational, and higher education should be facilitated to equip individuals with the skills required for employment and entrepreneurship."
                    ordL={1}
                    ordR={0}
                />
                <BodyContent2 
                    img={literacy}
                    title="Enhance Youth and Adult Literacy"
                    text="Efforts should be made to promote literacy and numeracy skills among youth and adults, empowering them to actively participate in society and the economy."
                    ordL={0}
                    ordR={0}
                />
            </div>

            {/* Body Layout 3 */}
            <div className="container" >
                <Heading 
<<<<<<< HEAD
                    title="Challenges Face by Students"
                    text="The terms equity and equality are often used interchangeably in education, but it is important to understand the difference between them. While both have their benefits, equity should be the ultimate goal for educators when addressing issues faced by disadvantaged students. "
                    size="1"
=======
                    title="Challenges and solutions"
                    text="Achieving quality education for all is not without its challenges. Here are some common obstacles and potential solutions:"
                    size="3"
>>>>>>> a4857c1221dfd9763fed869aab81f8e90f0ee43f
                    weight="bold"
                    
                    align="left"
                />
                <TwoColGrid>
                    <BodyContent3 
                        image={schoolicon} 
                        title="Access and Equity" 
                        text="Ensuring equal access to education for all individuals, regardless of their background or location."
                    />
                    <BodyContent3 
                        image={teachericon} 
                        title="Teacher Shortage and Quality" 
                        text="Overcoming the shortage of qualified teachers and ensuring their effectiveness in delivering quality education."
                    />
                    <BodyContent3 
                        image={equityicon} 
                        title="Education Financing" 
                        text="Allocating sufficient funds for education to provide necessary resources and infrastructure."
                    />
                </TwoColGrid>
                <TwoColGrid>
                    <BodyContent3 
                        image={policyicon} 
                        title="Policy and Legal Frameworks" 
                        text="Implementing inclusive policies and laws that prioritize equitable access to education."
                    />
                    <BodyContent3 
                        image={trainingicon} 
                        title="Teacher Training and Support" 
                        text=" Investing in comprehensive teacher training programs and providing ongoing support for professional development."
                    />
                    <BodyContent3 
                        image={savingsicon} 
                        title="Increased Education Funding" 
                        text="Prioritizing increased investment in education through larger budget allocations and innovative financing mechanisms."/>
                </TwoColGrid>
                
            </div>
            <div className="container py-5 my-5">
                <Jumbotron/>
            </div>
            {/* Body Layout 4 */}
            <div className="container">
                <Heading 
                    title="News"
                    text="Here are some related articles for more information:"
                    size="4"
                    weight="bold"
                    
                    align="left"
                />  
                <ThreeColGrid>
                    <Cards 
                        image={newart1} 
                        title="Expert Group to Prepare Report Analysing Climate and SDG Synergies, Aiming to Maximize Action Impact" 
                        link="https://sdgs.un.org/blog/expert-group-prepare-report-analysing-climate-and-sdg-synergies-aiming-maximize-action-impact"/>
                    <Cards image={newart2} title="The Higher Education Sustainability Initiative discusses integrating the Sustainable Development Goals into Higher Education" link="https://sdgs.un.org/news/higher-education-sustainability-initiative-discusses-integrating-sustainable-development-goals"/>
                    <Cards image={newart3} title="The Higher Education Sustainability Initiative discusses the transformation of higher education as a result of the COVID-19 pandemic" link="https://sdgs.un.org/news/higher-education-sustainability-initiative-discusses-transformation-higher-education-result"/>
                </ThreeColGrid>
            </div>
            <Footer/>

        </div>
    );
}

export default LandingPage