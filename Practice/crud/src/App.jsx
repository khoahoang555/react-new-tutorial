import Header from "./components/Header.jsx";
import ListEmployee from "./components/ListEmployee.jsx";
import FormEmployee from "./components/FormEmployee";
import {useState} from "react";

export default function App() {
  const [mode, setMode] = useState('list');
  const [employees, setEmployees] = useState([]);

  function handleChangeMode(currentMode) {
    setMode(currentMode);
  }

  function handleAddEmployee() {

  }

  return (
    <div className="container mx-auto my-12">
      <Header />
      <div className="mt-32"></div>
      {mode === 'list' && <ListEmployee onChangeMode={handleChangeMode} />}
      {mode === 'add' && <FormEmployee onChangeMode={handleChangeMode} />}
    </div>
  )
}