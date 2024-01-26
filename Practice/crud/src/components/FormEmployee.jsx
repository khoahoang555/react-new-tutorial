import Button from "./Button";
import Input from "./Input";
import {useEffect, useRef, useState} from "react";
import Modal from "./Modal.jsx";

export default function FormEmployee({onChangeMode, onAddEmployee, employee, onEditEmployee}) {
  const modal = useRef(null);

  const isEditEmployee = Object.values(employee).length !== 0;
  const [employeeValues, setEmployeeValues] = useState({
    name: isEditEmployee ? employee.name : '',
    birthday: isEditEmployee ? employee.birthday : '',
    job: isEditEmployee ? employee.job : ''
  });

  function handleChangeValue(field, event) {
    setEmployeeValues(prevState => {
      return {
       ...prevState,
       [field]: event.target.value
      }
    });
  }

  function handleSaveEmployee() {
    if (employeeValues.name.trim() === '' || employeeValues.birthday.trim() === '' || employeeValues.job.trim() === '') {
      modal.current.open();
      return;
    }

    const newEmployee = {
      id: isEditEmployee ? employee.id : Math.random(),
      name: employeeValues.name,
      birthday: employeeValues.birthday,
      job: employeeValues.job
    }

    isEditEmployee ? onEditEmployee(newEmployee) : onAddEmployee(newEmployee);
  }

  return (
    <>
      <Modal ref={modal} captionButton="Okay" severity="danger">
        <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
      </Modal>

      <div className="max-w-sm mx-auto">
        <Input label="Name of employee" placeholder="Enter name" onChange={(e) => handleChangeValue("name", e)} value={employeeValues.name} />
        <Input label="Birthday" type="date" onChange={(e) => handleChangeValue("birthday", e)} value={employeeValues.birthday} />
        <Input label="Job" placeholder="Enter job" onChange={(e) => handleChangeValue("job", e)} value={employeeValues.job} />

        <Button className="bg-green-500 hover:bg-green-700 font-medium text-white w-full justify-center mt-5" onClick={handleSaveEmployee}>
          <p>{isEditEmployee ? "Edit" : "Save"} Employee</p>
        </Button>
        <Button className="bg-gray-400 hover:bg-gray-700 font-medium text-white w-full justify-center mt-3" onClick={() => onChangeMode('list')}>
          <p>Cancel</p>
        </Button>
      </div>
    </>

  );
}