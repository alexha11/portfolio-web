import { useId } from 'react';

// A labelled, required form field: a single-line input, or a textarea when `big` is set
const Form = ( {label, type = 'text', name, placeholder, autoComplete, className = '', big} ) => {
  const id = useId();
  const fieldClassName = `${className} px-3 py-2 bg-slate-600 text-textLight text-base rounded-md ring-2 ring-gray-700 placeholder:text-slate-300 focus:ring-[#4681f4] outline-none w-full`;

  return (
    <div>
      <div className="mb-3">
            <label htmlFor={id} className="text-textLight text-base">{label}</label>
      </div>
      {big ? (
        <div>
          <textarea
            id={id}
            className={`${fieldClassName} h-[10rem]`}
            name={name}
            placeholder={placeholder}
            required
          />
        </div>
      ) : (
        <div>
          <input
            id={id}
            className={fieldClassName}
            type={type}
            name={name}
            placeholder={placeholder}
            autoComplete={autoComplete}
            required
          />
        </div>
      )}
    </div>
  );
}

export default Form;
