import Button from "./Button.jsx";
import ItemEmployee from "./ItemEmployee";

export default function ListEmployee({employees, onChangeMode, onDeleteEmployee, onSelectEmployee}) {
  let content = <p className="text-center font-medium">This list is empty!</p>;
  if (employees.length > 0) {
    content = employees.map((employee => (
      <ItemEmployee
        key={employee.id}
        onDelete={onDeleteEmployee}
        employee={employee}
        onSelect={onSelectEmployee}
      ></ItemEmployee>)));
  }

  return (
    <>
      <div className="flex justify-between mb-16 items-center px-10">
        <p className="font-bold text-xl">Employee Listing</p>
        <Button className="bg-green-500 hover:bg-green-700 font-medium text-white" onClick={() => onChangeMode('form')}>
          <i className="ri-add-circle-line mr-1.5 text-2xl"></i>
          <p>Add Employee</p>
        </Button>
      </div>
      {content}
    </>
  );
}