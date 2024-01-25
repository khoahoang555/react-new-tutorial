import Button from "./Button.jsx";
import ItemEmployee from "./ItemEmployee";

export default function ListEmployee({onChangeMode}) {


  return (
    <>
      <div className="flex justify-between mb-16 items-center px-10">
        <p className="font-bold text-xl">Employee Listing</p>
        <Button className="bg-green-500 hover:bg-green-700 font-medium text-white" onClick={() => onChangeMode('add')}>
          <i className="ri-add-circle-line mr-1.5 text-2xl"></i>
          <p>Add Employee</p>
        </Button>
      </div>
      <ItemEmployee></ItemEmployee>
      <ItemEmployee></ItemEmployee>
    </>
  );
}