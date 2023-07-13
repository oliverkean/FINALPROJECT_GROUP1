import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function References() {
    return(
        <>
            <Navbar/>
            <div className="container my-5 py-5" >
                <Header 
                    title="About Goal 4: Quality Education"
                    text="SDG4 focuses on education and aims to “ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.” "
                />
            </div>
            <Footer/>
        </>
    );
}

export default References