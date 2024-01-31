export default function ProgressBar() {
  return (
      <div className="bg-white rounded-xl shadow overflow-hidden p-1">
        <div className="relative h-6 flex items-center justify-center bg-white">
          <div className="absolute top-0 bottom-0 left-0 rounded-lg w-[60%] bg-indigo-300"></div>
          <div className="relative text-indigo-900 font-medium text-sm bg-indigo-300">60%</div>
        </div>
      </div>
  );
}