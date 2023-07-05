<<<<<<< HEAD
import Button from "../Components/Button";
import ButtonLink from "../Components/ButtonLink";
import TwoColGrid from "../Layouts/TwoColGrid";
import ThreeColGrid from "../Layouts/ThreeColGrid";
import Navbar from "../Components/Navbar";

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
            <Button text="Button 1" color="primary"/>
            <ButtonLink text="Button 2" color="primary" link=""/>
            <TwoColGrid
                // pass 2 components as columns eg. col1 = {<Button/>}
                // pass in a component instead of normal jsx
                col1 = {<Button text="col1" color='secondary'/>}
                col2 = {<div className="bg-secondary">2</div>}
            />
            <ThreeColGrid
                // pass 3 components as columns eg. col1 = {<Button/>}
                col1 = {<div className="bg-primary">1</div>}
                col2 = {<div className="bg-secondary">2</div>}
                col3 = {<div className="bg-danger">3</div>}
            />
        </div>
    );
}

export default LandingPage
=======
import React from 'react'

function LandingPage() {
  return (
    <div>
      
    </div>
  )
}

export default LandingPage
>>>>>>> 01433377aa83a7ef2e995849897e199b25aea18f
