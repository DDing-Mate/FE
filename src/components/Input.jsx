function Input({ label, type = "text", placeholder, htmlFor, register }) {
  return (
    <div className="form-control w-full max-w-xs mb-5">
      <label className={htmlFor} htmlFor={htmlFor}>
        <span className="label-text-alt text-lg">{label}</span>
      </label>
      <input
        id={htmlFor}
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-lg"
        {...register(htmlFor)}
      />
    </div>
  );
}

export default Input;
