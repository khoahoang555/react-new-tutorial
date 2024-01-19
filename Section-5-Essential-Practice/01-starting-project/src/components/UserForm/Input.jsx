export default function Input({ label, ...props }) {
  return (
    <div className="m-10">
      <label>{label}</label>
      <input type="number" {...props} />
    </div>
  );
}