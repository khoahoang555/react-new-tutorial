import Header from "./components/Header.jsx";
import ListEmployee from "./components/ListEmployee.jsx";
import FormEmployee from "./components/FormEmployee";
import {useState} from "react";

export default function App() {
  const [mode, setMode] = useState('list');
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState({});

  function handleChangeMode(currentMode) {
    setMode(currentMode);
  }

  function handleAddEmployee(employee) {
    handleChangeMode('list')
    const newEmployee = {...employee};
    setEmployees(prevState => [...prevState, newEmployee])
  }

  function handleDeleteEmployee(id) {
    setEmployees(prevState => prevState.filter((employee) => employee.id !== id));
  }

  function handleSelectEmployee(id) {
    let employee = {...employees.find(item => item.id === id)};
    setSelectedEmployee(employee);
    handleChangeMode('form');
  }

  return (
    <div className="container mx-auto my-12">
      <Header />
      <div className="mt-32"></div>
      {mode === 'list' && (
        <ListEmployee
          onChangeMode={handleChangeMode}
          employees={employees}
          onDeleteEmployee={handleDeleteEmployee}
          onSelectEmployee={handleSelectEmployee}
        />
      )}
      {mode === 'form' && <FormEmployee onChangeMode={handleChangeMode} onAddEmployee={handleAddEmployee} employee={selectedEmployee} />}
    </div>
  )
}