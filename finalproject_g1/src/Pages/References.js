import Accordion from "../Components/Accordion";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { accordionContent1 } from "../content/landingContent";

import header4 from '../Assets/images/header4.jpeg'

function References() {
    return(
        <div className="container">
            <Navbar/>
<<<<<<< HEAD
            <div className="container my-5 py-5" >
                <Header 
                    image={header4}
                    title="References"
                    text="This page contains all references to resources used in this website."
                />
            </div>
            <div className="container">
                <Accordion content={accordionContent1} />
            </div>
            <Footer/>
        </>
=======
            hello from references
        </div>
>>>>>>> origin/main
    );
}

export default References