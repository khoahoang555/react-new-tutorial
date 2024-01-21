export default function Input({ label, value, ...props }) {
  return (
    <div className="m-10">
      <label>{label}</label>
      <input type="number" required {...props} />
    </div>
  );
}