const Form = ( {label, type, name, placeholder, value, className, big} ) => {
  return (
    <div>
      <div className="mb-3">
            <label className="text-textLight text-base">{label}</label>
      </div>
      {big ? (
        <div>
          <textarea
            className={`${className} px-3 py-2 bg-slate-600 text-textLight text-base rounded-md ring-2 ring-gray-700 focus:ring-[#4681f4] focus:border-[#4681f4] outline-none w-full h-[10rem] `}
            name={name}
            placeholder={placeholder}
            value={value}
          />
        </div>
      ) : (
        <div>
          <input 
          className={`${className} px-3 py-2 text-textLight text-base ring-2 ring-gray-700 bg-slate-600 focus:ring-[#4681f4] focus:border-[#4681f4] outline-none rounded-md w-full`}  
            type= {type}  
            name= {name}       
            placeholder= {placeholder}
          />
        </div>
      )}
    </div>
  );
}

export default Form;