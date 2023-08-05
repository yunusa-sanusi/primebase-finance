function Input({ onChangeHandler, ...props }) {
  return (
    <input
      type="text"
      className="w-full py-1 my-5 border-b-2 boder-b-[#000d23] outline-none h-full"
      required={true}
      onChange={onChangeHandler}
      {...props}
    />
  );
}
export default Input;
