export default function Answer({content, ...props}) {
  return (
      <button
          className="border-2 border-solid rounded-md w-[100%] text-left my-2 py-2 px-3 text-gray-600
              hover:border-indigo-300 hover:text-gray-900 hover:font-medium font-md text-base" {...props}>
        <span className="bg-gray-600 rounded-full w-1.5 h-1.5 mr-3 inline-block mb-0.5"></span>
        <p className="break-words inline">{content}</p>
      </button>
  )
}