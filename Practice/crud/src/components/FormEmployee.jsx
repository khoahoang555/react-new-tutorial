import Button from "./Button";
import Input from "./Input";
import {useRef} from "react";
import Modal from "./Modal.jsx";

export default function FormEmployee({onChangeMode, onAddEmployee, employee}) {
  const name = useRef();
  const birthday = useRef();
  const job = useRef();
  const modal = useRef();

  if (Object.keys(employee).length !== 0) {
    console.log(employee.name);
    name.current.value = employee.name;
    birthday.current.value = employee.birthday;
    job.current.value = employee.job;
  }

  function handleAddEmployee() {
    const nameValue = name.current.value;
    const birthdayValue = birthday.current.value;
    const jobValue = job.current.value;
    if (nameValue.trim() === '' || birthdayValue.trim() === '' || jobValue.trim() === '') {
      modal.current.open();
      return;
    }

    const employee = {
      id: Math.random(),
      name: nameValue,
      birthday: birthdayValue,
      job: jobValue
    }

    onAddEmployee(employee);
  }

  return (
    <>
      <Modal ref={modal} captionButton="Okay" severity="danger">
        <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
      </Modal>

      <div className="max-w-sm mx-auto">
        <Input label="Name of employee" placeholder="Enter name" ref={name} />
        <Input label="Birthday" type="date" ref={birthday} />
        <Input label="Job" placeholder="Enter job" ref={job} />
        <Button className="bg-green-500 hover:bg-green-700 font-medium text-white w-full justify-center mt-5" onClick={handleAddEmployee}>
          <p>Add Employee</p>
        </Button>
        <Button className="bg-gray-400 hover:bg-gray-700 font-medium text-white w-full justify-center mt-3" onClick={() => onChangeMode('list')}>
          <p>Cancel</p>
        </Button>
      </div>
    </>

  );
}