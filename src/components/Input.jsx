export default function Input({ name, type, children, ...props }) {
  return (
    <div className="control">
      <label htmlFor={name}>{children}</label>
      <input type={type} id={name} name={name} {...props} />
    </div>
  );
}
