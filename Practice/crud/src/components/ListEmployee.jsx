import Button from "./Button.jsx";

export default function ListEmployee() {
  return (
    <>
      <div className="flex justify-between mt-32 items-center px-10">
        <p className="font-bold text-xl">Employee Listing</p>
        <Button className="bg-green-500 hover:bg-green-700 font-medium text-white">
          <i className="ri-add-circle-line mr-1.5 text-2xl"></i>
          <p>Add Employee</p>
        </Button>
      </div>

    </>
  );
}