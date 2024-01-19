import Header from "./components/Header/Header";
import UserForm from "./components/UserForm/UserForm";
import Result from "./components/Result/Result";
import {calculateInvestmentResults} from "./util/investment.js";
import {useState} from "react";

function App() {
  const [annualData, setAnnualData] = useState([]);

  function handleUserInput(investmentObj) {
    const isNotNull = Object.values(investmentObj).every(value => {
      return value;
    });

    if (isNotNull) {
      setAnnualData([...calculateInvestmentResults(investmentObj)]);
      console.log(annualData);
    }
  }

  return (
    <main>
      <Header />
      <UserForm onChangeInput={handleUserInput} />
      <Result annualData={annualData}/>
    </main>
  )
}

export default App
