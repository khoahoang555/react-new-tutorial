export default function Button({children, classes, ...props}) {
  let cssClasses = "px-5 py-2.5 rounded-lg border border-solid font-medium "
  if (classes) {
    cssClasses = cssClasses + classes;
  }

  return <button className={cssClasses} {...props}>
    {children}
  </button>
}