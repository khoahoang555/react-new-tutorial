export default function Button({className, children, ...props}) {
  let currentClasses = "rounded-lg px-4 py-2 inline-flex items-center ";
  if (className !== null) {
    currentClasses += className;
  }

  return (
    <button className={currentClasses} {...props}>
      {children}
    </button>
  );
}