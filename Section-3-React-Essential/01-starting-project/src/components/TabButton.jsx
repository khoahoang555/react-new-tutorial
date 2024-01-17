export default function TabButton({children, onSelect}) {
  console.log("TabButton is executing!");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}