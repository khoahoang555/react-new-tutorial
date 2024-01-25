import Button from "./Button";

export default function ItemEmployee() {
  return (
    <div className="flex items-center p-4 bg-gray-100 mb-5 shadow">
      <div className="flex-auto text-left">
        <p>Name</p>
        <p className="text-gray-600 text-sm">Mar 25 2015</p>
        <p className="font-medium pt-1">Job</p>
      </div>
      <div className="flex-auto text-right">
        <Button className="bg-gray-300">
          <i className="ri-edit-box-line font-2xl"></i>
        </Button>

        <Button className="bg-gray-300 ml-2">
          <i className="ri-delete-bin-6-line font-2xl"></i>
        </Button>
      </div>
    </div>
  );
}