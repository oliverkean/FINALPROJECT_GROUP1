import Accordion from "../Components/Accordion";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { accordionContent1 } from "../content/landingContent";

function References() {
    return(
        <>
            <Navbar/>
            <div className="container my-5 py-5" >
                <Header 
                    title="References"
                    text="This page contains all references to resources used in this website."
                />
            </div>
            <div className="container">
                <Accordion content={accordionContent1} />
            </div>
            <Footer/>
        </>
    );
}

export default References