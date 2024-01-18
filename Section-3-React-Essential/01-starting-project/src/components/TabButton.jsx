export default function TabButton({children, onSelect, isSelected, ...props}) {
  console.log("TabButton is executing!");
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
    </li>
  );
}