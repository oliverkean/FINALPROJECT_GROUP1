import Button from "./Components/Button";
import ButtonLink from "./Components/ButtonLink";
import TwoColGrid from "./Layouts/TwoColGrid";

function App() {
  return (
    <div className="App">
      <Button text="Button 1" color="primary"/>
      <ButtonLink text="Button 2" color="primary" link=""/>
      <TwoColGrid>
        <div className="col-sm-12 col-md-6 col-lg-6">
          Hello
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          There
        </div>
      </TwoColGrid>
    </div>
  );
}

export default App;
