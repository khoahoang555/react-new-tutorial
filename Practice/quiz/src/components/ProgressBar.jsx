export default function ProgressBar({time}) {

  return (
      <div className="bg-white rounded-xl shadow overflow-hidden p-1">
        <div className="relative h-6 flex items-center justify-center bg-white">
          <div className={`absolute top-0 bottom-0 left-0 rounded-lg bg-indigo-300`} style={{ width: `${time}%` }}></div>
          {/*<div className="relative text-indigo-900 font-medium text-sm">{percent}%</div>*/}
        </div>
      </div>
  );
}