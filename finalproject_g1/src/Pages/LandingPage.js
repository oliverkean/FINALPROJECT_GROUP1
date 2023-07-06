import ThreeColGrid from "../Layouts/ThreeColGrid";
import Navbar from "../Components/Navbar";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Footer from "../Components/Footer";
=======
>>>>>>> origin/Glenn-Branch
import BodyContent1 from "../Components/BodyContent1";

import icon1 from '../Assets/images/icons8-education-100.png'
import icon2 from '../Assets/images/icons8-bullseye-100.png'
import icon3 from '../Assets/images/icons8-development-64.png'
<<<<<<< HEAD
=======
>>>>>>> 55b1cca84e440f3f60ff95ff77fae9bdb6d0dab2
>>>>>>> origin/Glenn-Branch

function LandingPage() {
    return(
        <div className="container">
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
            <ThreeColGrid 
                col1={<BodyContent1 image={icon1} title="Title" text="lorem ipsum dolor sit amet"/>}
                col2={<BodyContent1 image={icon2} title="Title" text="lorem ipsum dolor sit amet"/>}
                col3={<BodyContent1 image={icon3} title="Title" text="lorem ipsum dolor sit amet"/>}
            />
<<<<<<< HEAD
            
=======
<<<<<<< HEAD
            <Footer/>
=======
            
>>>>>>> 55b1cca84e440f3f60ff95ff77fae9bdb6d0dab2
>>>>>>> origin/Glenn-Branch
        </div>
    );
}

export default LandingPage