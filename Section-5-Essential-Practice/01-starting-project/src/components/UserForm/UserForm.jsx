import './UserForm.css';
import Input from "./Input";
import {useState} from "react";

const INITIAL_INVESTMENT = {
  initialInvestment: null,
  annualInvestment: null,
  expectedReturn: null,
  duration: null
}

export default function UserForm({ onChangeInput }) {
  const [investmentInfo, setInvestmentInfo] = useState({...INITIAL_INVESTMENT});

  function handleUserInput(fieldName, value) {
    setInvestmentInfo((preInfo) => {
      preInfo[fieldName] = value;
      return preInfo;
    });

    onChangeInput(investmentInfo);
  }

  return (
    <form id="user-input">
      <div className="input-group">
        <Input
            label="Initial Investment"
            onChange={(e) => handleUserInput('initialInvestment', e.target.value)}
        />
        <Input
            label="Annual Investment"
            onChange={(e) => handleUserInput('annualInvestment', e.target.value)}
        />
      </div>

      <div className="input-group">
        <Input
            label="Expected Return"
            onChange={(e) => handleUserInput('expectedReturn', e.target.value)}
        />
        <Input
            label="Duration"
            onChange={(e) => handleUserInput('duration', e.target.value)}
        />
      </div>
    </form>
  );
}