import Button from "./Components/Button";
import ButtonLink from "./Components/ButtonLink";
import TwoColGrid from "./Layouts/TwoColGrid";
import Heading from "./Components/Heading";
function App() {
  return (
    <div className="App">
      <Button text="Button 1" color="primary"/>
      <ButtonLink text="Button 2" color="primary" link=""/>
      <TwoColGrid>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <Heading text="This is a Heading" size="5" color="danger"/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
        <Heading text="This is a Heading too" size="6" color="success"/>
        </div>
      </TwoColGrid>
    </div>
  );
}

export default App;
