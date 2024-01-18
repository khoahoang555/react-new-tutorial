import Header from "./components/Header/Header";
import {Fragment} from "react";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {


  return (
      <Fragment>
        <Header />
        <main>
          <CoreConcepts />
          <Examples />
        </main>
      </Fragment>
  );
}

export default App;
