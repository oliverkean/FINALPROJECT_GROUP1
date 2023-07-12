import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

function LearnMore() {
    return(
        <>
            <Navbar/>
             {/* Header */}
             <div className="container">
                <Header 
                    title="Learn More"
                    text="Discover the transformative power of quality education, where knowledge meets opportunity, unlocking boundless potential for learners of all ages and backgrounds."
                />
            </div>
        </>
    );
}

export default LearnMore