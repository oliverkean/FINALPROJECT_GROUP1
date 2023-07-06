import ThreeColGrid from "../Layouts/ThreeColGrid";
// import TwoColGrid from "../Layouts/TwoColGrid"
import Navbar from "../Components/Navbar";

import Footer from "../Components/Footer";
import BodyContent1 from "../Components/BodyContent1";
import BodyContent2 from "../Components/BodyContent2";

import icon1 from '../Assets/images/icons8-education-100.png'
import icon2 from '../Assets/images/icons8-bullseye-100.png'
import icon3 from '../Assets/images/icons8-development-64.png'
import img1 from '../Assets/images/pexels-julia-voller-17390197.jpg'


function LandingPage() {
    return(
        <div>
            {/* Nav */}
            {/* <Navbar/> */}
            {/* Header */}
            {/* Body Layout 1 */}
            {/* Body Layout 2 */}
            {/* Body Layout 3 */}
            {/* Body Layout 4 */}
            {/* Body Layout 5 */}
            {/* Body Layout 6 */}
            {/* Body Layout 7 */}
            {/* Footer */}

            {/* Testing */}
            <ThreeColGrid 
                col1={<BodyContent1 image={icon1} title="Title" text="lorem ipsum dolor sit amet"/>}
                col2={<BodyContent1 image={icon2} title="Title" text="lorem ipsum dolor sit amet"/>}
                col3={<BodyContent1 image={icon3} title="Title" text="lorem ipsum dolor sit amet"/>}
            />

            <BodyContent2 
                image={img1} 
                title="Title" 
                text="lorem ipsum dolor sit amet"
                orderL={0}
                orderR={0}
            />
            {/* <TwoColGrid 
                col1={}
                col2={}
            /> */}

            {/* <Footer/> */}

        </div>
    );
}

export default LandingPage