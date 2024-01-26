import {forwardRef} from "react";

const Input = forwardRef(function Input({label, ...props}, ref) {
  return (
    <div className="mb-5">
      <label className="block mb-1.5 tracking-wide uppercase text-xs font-bold text-gray-700">{label}</label>
      <input ref={ref}
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-blue-500" {...props} />
    </div>
  );
});

 export default Input;