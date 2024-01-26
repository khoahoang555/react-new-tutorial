import Button from "./Button";

export default function ItemEmployee({employee, onDelete, onSelect}) {

  const birthday = new Date(employee.birthday).toDateString();

  return (
    <div className="flex items-center p-4 bg-gray-100 mb-5 shadow">
      <div className="flex-auto text-left">
        <p>{employee.name}</p>
        <p className="text-gray-600 text-sm">{birthday}</p>
        <p className="font-medium pt-1">{employee.job}</p>
      </div>
      <div className="flex-auto text-right">
        <Button
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-bold rounded-lg text-sm px-4 py-2 text-center
          me-2 mb-2" onClick={() => onSelect(employee.id)}>
          <i className="ri-edit-box-line"></i>
        </Button>

        <Button
          className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-bold rounded-lg text-sm px-4 py-2 text-center
          me-2 mb-2" onClick={() => onDelete(employee.id)}>
          <i className="ri-delete-bin-6-line"></i>
        </Button>
      </div>
    </div>
  );
}