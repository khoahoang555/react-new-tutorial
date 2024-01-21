import Header from "./components/Header/Header";
import UserForm from "./components/UserForm/UserForm";
import Result from "./components/Result/Result";
import {calculateInvestmentResults} from "./util/investment.js";
import {useState} from "react";

function App() {
  const [annualData, setAnnualData] = useState([]);
  const [isValidInput, setIsValidInput] = useState(true);

  function handleUserInput(investmentObj) {
    if (investmentObj.duration < 0) {
      setIsValidInput(false);
      return;
    } else {
      setIsValidInput(true);
    }

    const isNotNull = Object.values(investmentObj).every(value => {
      return value;
    });

    if (isNotNull) {
      setAnnualData((prevData) => {
        prevData = [...calculateInvestmentResults(investmentObj)];
        return prevData;
      });
    }
  }

  return (
    <main>
      <Header />
      <UserForm onChangeInput={handleUserInput} />
      {!isValidInput && <p className="center">Please enter a duration greater than zero.</p>}
      {isValidInput && <Result annualData={annualData}/>}
    </main>
  )
}

export default App
