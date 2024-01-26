import Header from "./components/Header.jsx";
import ListEmployee from "./components/ListEmployee.jsx";
import FormEmployee from "./components/FormEmployee";
import {useState} from "react";

export default function App() {
  const [employeeState, setEmployeeState] = useState({
    mode: 'list',
    selectedEmployee: {},
    employees: []
  })

  function handleChangeMode(currentMode) {
    setEmployeeState(prevState => {
      return {
        ...prevState,
        mode: currentMode,
        selectedEmployee: {}
      }
    })
  }

  function handleAddEmployee(employee) {
    setEmployeeState(prevState => {
      const newEmployee = {...employee};
      return {
        ...prevState,
        mode: "list",
        employees: [...prevState.employees, newEmployee]
      }
    })
  }

  function handleDeleteEmployee(id) {
    setEmployeeState(prevState => {
      return {
        ...prevState,
        employees: prevState.employees.filter(employee => employee.id !== id)
      }
    })
  }

  function handleSelectEmployee(id) {
    setEmployeeState(prevState => {
      return {
        ...prevState,
        mode: "form",
        selectedEmployee: {...prevState.employees.find(item => item.id === id)}
      }
    })
  }

  function handleEditEmployee(employee) {
    setEmployeeState(prevState => {
      const index = prevState.employees.findIndex(item => item.id === employee.id);
      prevState.employees[index] = {...employee}

      return {
        ...prevState,
        mode: "list",
        employees: [...prevState.employees]
      }
    })
  }

  return (
    <div className="container mx-auto my-12">
      <Header />
      <div className="mt-32"></div>
      {employeeState.mode === 'list' && (
        <ListEmployee
          onChangeMode={handleChangeMode}
          employees={employeeState.employees}
          onDeleteEmployee={handleDeleteEmployee}
          onSelectEmployee={handleSelectEmployee}
        />
      )}
      {employeeState.mode === 'form' && (
          <FormEmployee
              onChangeMode={handleChangeMode}
              onAddEmployee={handleAddEmployee}
              employee={employeeState.selectedEmployee}
              onEditEmployee={handleEditEmployee}
          />
      )}
    </div>
  )
}