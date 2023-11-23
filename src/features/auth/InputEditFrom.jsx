export default function InputEditForm({
    title,
    name,
    value,
    onChange,
    type = "text",
    error,
  }) {
    return (
      <div className=" flex gap-4">
        <span className="text-Primary-dark text-[18px] font-normal">{title}</span>
        <input
          className={`w-[300px] px-2 border-2 outline-none rounded-lg
                  ${
                    error
                      ? ` border-Error-main `
                      : `border-Primary-dark  bg-MonoColor-50  active:border-2 active:border-Primary-darker`
                  }
                  `}
          value={value}
          name={name}
          onChange={onChange}
          type={type}
        ></input>
      </div>
    );
  }