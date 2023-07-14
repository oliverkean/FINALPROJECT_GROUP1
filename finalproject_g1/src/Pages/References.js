import Navbar from "../Components/Navbar";

function References() {
    return(
        <>
            <Navbar/>
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
    );
}

export default References