import ThreeColGrid from "../Layouts/ThreeColGrid";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BodyContent1 from "../Components/BodyContent1";

import icon1 from '../Assets/images/icons8-education-100.png'
import icon2 from '../Assets/images/icons8-bullseye-100.png'
import icon3 from '../Assets/images/icons8-development-64.png'

function LandingPage() {
    return(
        <div>
            {/* Nav */}
            <Navbar/>
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
            <div className="container">
                <ThreeColGrid
                    col1={<BodyContent1 image={icon1} title="Education Opportunities" text="lorem ipsum dolor sit amet"/>}
                    col2={<BodyContent1 image={icon2} title="Equitable Education" text="lorem ipsum dolor sit amet"/>}
                    col3={<BodyContent1 image={icon3} title="Child Development" text="lorem ipsum dolor sit amet"/>}
                />
            </div>
            <Footer/>

        </div>
    );
}

export default LandingPage